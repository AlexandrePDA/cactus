import prisma from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import Email from "next-auth/providers/email";
import { ExtendedUser } from "../../../../type";
import LinkedInProvider from "next-auth/providers/linkedin";

const githubId = process.env.GITHUB_ID;
const githubSecret = process.env.GITHUB_SECRET;
const googleId = process.env.GOOGLE_ID;
const googleSecret = process.env.GOOGLE_SECRET;
const linkedinId = process.env.LINKEDIN_ID;
const linkedinSecret = process.env.LINKEDIN_SECRET;

export const dynamic = "force-dynamic";

if (
  !githubId ||
  !githubSecret ||
  !googleId ||
  !googleSecret ||
  !linkedinId ||
  !linkedinSecret
) {
  throw new Error(
    "Missing GITHUB_ID or GITHUB_SECRET or GOOGLE_ID or GOOGLE_SECRET in .env"
  );
}

export const authConfig = {
  providers: [
    GithubProvider({
      clientId: githubId,
      clientSecret: githubSecret,
    }),
    GoogleProvider({
      clientId: googleId,
      clientSecret: googleSecret,
    }),
    LinkedInProvider({
      clientId: linkedinId,
      clientSecret: linkedinSecret,
    }),
    Email({
      from: "Cact-Us <do-not-reply@cact-us.com",
      server: {
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      },
    }),
  ],
  callbacks: {
    session: async ({
      session,
      user,
    }: {
      session: any;
      user: ExtendedUser | null;
    }) => {
      if (user) {
        session.user.bio = user.bio;
        session.user.haveCompetence = user.haveCompetence;
        session.user.askCompetence = user.askCompetence;
        session.user.github = user.github;
        session.user.linkedin = user.linkedin;
        session.user.instagram = user.instagram;
        session.user.ownSite = user.ownSite;
        session.user.id = user.id;
        session.user.skill1 = user.skill1;
        session.user.skill2 = user.skill2;
        session.user.skill3 = user.skill3;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/signIn",
    verifyRequest: "/auth/verify-request",
    error: "/auth/error",
  },
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
} satisfies NextAuthOptions;

export default NextAuth(authConfig);
