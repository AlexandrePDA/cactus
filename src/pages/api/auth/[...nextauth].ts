import prisma from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import { ExtendedUser } from "../../../../type";
import { compare } from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";

export const dynamic = "force-dynamic";

export const authConfig = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        const emailToLowerCase = credentials?.email?.toLowerCase();
        if (!emailToLowerCase || !credentials?.password) {
          return null;
        }
        const response = await prisma.user.findUnique({
          where: { email: emailToLowerCase },
        });
        const user = response;

        const passwordCorrect = await compare(
          credentials?.password || "",
          user?.password || ""
        );

        if (user === null) {
          return null;
        }

        if (passwordCorrect) {
          return {
            id: user.id,
            email: user.email,
            name: user.name,
            linkedin: user.linkedin,
            image: user.image,
            github: user.github,
            haveCompetence: user.haveCompetence,
            askCompetence: user.askCompetence,
            instagram: user.instagram,
            ownSite: user.ownSite,
            skill1: user.skill1,
            skill2: user.skill2,
            skill3: user.skill3,
            bio: user.bio,
            projet: user.projet,
            slug: user.slug,
            resetPasswordToken: user.resetPasswordToken,
            resetPasswordTokenExpiry: user.resetPasswordTokenExpiry,
          };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    session: async ({ session, token }: { session: any; token: any }) => {
      if (session.user) {
        session.user.bio = token.bio;
        session.user.haveCompetence = token.haveCompetence;
        session.user.askCompetence = token.askCompetence;
        session.user.github = token.github;
        session.user.linkedin = token.linkedin;
        session.user.instagram = token.instagram;
        session.user.ownSite = token.ownSite;
        session.user.id = token.id;
        session.user.skill1 = token.skill1;
        session.user.skill2 = token.skill2;
        session.user.skill3 = token.skill3;
        session.user.name = token.name;
        session.user.image = token.image;
        session.user.projet = token.projet;
        session.user.slug = token.slug;
        session.user.resetPasswordToken = token.resetPasswordToken;
        session.user.resetPasswordTokenExpiry = token.resetPasswordTokenExpiry;
      }
      return session;
    },
    async jwt({ token }) {
      const existingUser = await prisma.user.findUnique({
        where: { id: token.sub },
      });

      token.id = existingUser?.id;
      token.linkedin = existingUser?.linkedin;
      token.instagram = existingUser?.instagram;
      token.ownSite = existingUser?.ownSite;
      token.skill1 = existingUser?.skill1;
      token.skill2 = existingUser?.skill2;
      token.skill3 = existingUser?.skill3;
      token.bio = existingUser?.bio;
      token.haveCompetence = existingUser?.haveCompetence;
      token.askCompetence = existingUser?.askCompetence;
      token.github = existingUser?.github;
      token.name = existingUser?.name;
      token.image = existingUser?.image;
      token.projet = existingUser?.projet;
      token.resetPasswordToken = existingUser?.resetPasswordToken;
      token.slug = existingUser?.slug;
      token.resetPasswordTokenExpiry = existingUser?.resetPasswordTokenExpiry;

      return token;
    },
  },
  pages: {
    signIn: "/auth/signIn",
    verifyRequest: "/auth/verify-request",
    error: "/auth/error",
  },
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
} satisfies NextAuthOptions;

export default NextAuth(authConfig);
