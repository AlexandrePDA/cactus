import prisma from "@/lib/prisma";
import * as React from "react";
import ChangePasswordForm from "./changePasswordForm";
import ResetPasswordForm from "@/app/forgot-password/resetPasswordForm";

interface ResetPasswordPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const ResetPasswordPage = async ({ searchParams }: ResetPasswordPageProps) => {
  if (searchParams.token) {
    const user = await prisma.user.findUnique({
      where: {
        resetPasswordToken: searchParams.token as string,
      },
    });
    if (!user) {
      return <div>Token invalide</div>;
    }
    return (
      <ChangePasswordForm resetPasswordToken={searchParams.token as string} />
    );
  } else {
    return <ResetPasswordForm />;
  }
};

export default ResetPasswordPage;
