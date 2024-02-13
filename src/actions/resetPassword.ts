"use server";

import { sendPasswordResetEmail } from "@/lib/mail";
import prisma from "@/lib/prisma";
import { hash } from "bcrypt";
import crypto from "crypto";

// envoie un email pour reset le mot de passe
export const resetPassword = async (email: string) => {
  console.log("resetPassword", email);

  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (!user) {
    throw new Error("No user found");
  }

  const resetPasswordToken = crypto.randomBytes(32).toString("base64url");
  const today = new Date();
  const expiryDate = new Date(today.setDate(today.getDate() + 1));

  await prisma.user.update({
    where: {
      email: email,
    },
    data: {
      resetPasswordToken: resetPasswordToken,
      resetPasswordTokenExpiry: expiryDate,
    },
  });

  await sendPasswordResetEmail(email, resetPasswordToken);

  return "Password reset email sent";
};

// change le mot de passe
export const changePassword = async (
  resetPasswordToken: string,
  password: string
) => {
  const user = await prisma.user.findUnique({
    where: {
      resetPasswordToken: resetPasswordToken,
    },
  });

  if (!user) {
    throw new Error("No user found");
  }

  const resetPasswordTokenExpiry = user.resetPasswordTokenExpiry;
  if (!resetPasswordTokenExpiry) {
    throw new Error("Token expired");
  }

  const today = new Date();

  if (today > resetPasswordTokenExpiry) {
    throw new Error("Token expired");
  }

  const hashedPassword = await hash(password, 10);

  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      password: hashedPassword,
      resetPasswordToken: null,
      resetPasswordTokenExpiry: null,
    },
  });

  return "Password updated";
};
