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
      return (
        <main className="w-full h-screen flex flex-col items-center justify-center px-4">
          <div className="max-w-lg w-full text-gray-600 space-y-8 border p-4 rounded-lg shadow-md">
            <div className="text-center">
              <div className=" space-y-2">
                <h3 className="text-dark text-lg font-bold sm:text-2xl my-8">
                  Oups, une erreur est survenue 🤯
                </h3>
                <h4>Le token n'est pas bon...</h4>
                <p>Si ça persiste, contact-nous sur le chat</p>
              </div>
            </div>
          </div>
        </main>
      );
    }
    return (
      <div className="h-screen">
        <ChangePasswordForm resetPasswordToken={searchParams.token as string} />
      </div>
    );
  } else {
    return <ResetPasswordForm />;
  }
};

export default ResetPasswordPage;
