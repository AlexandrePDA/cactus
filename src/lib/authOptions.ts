import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import prisma from "@/lib/prisma";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        const response = await prisma.user.findUnique({
          where: { email: credentials?.email },
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
            linkedin: user.linkedin,
            image: user.email,
            github: user.github,
            haveCompetence: user.haveCompetence,
            askCompetence: user.askCompetence,
            instagram: user.instagram,
            ownSite: user.ownSite,
            skill1: user.skill1,
            skill2: user.skill2,
            skill3: user.skill3,
            bio: user.bio,
          };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    session: async ({ session, token }: { session: any; token: any }) => {
      if (session.user) {
        session.user.linkedin = token.linkedin;
        session.user.id = token.id;
        session.user.github = token.github;
        session.user.haveCompetence = token.haveCompetence;
        session.user.askCompetence = token.askCompetence;
        session.user.instagram = token.instagram;
        session.user.ownSite = token.ownSite;
        session.user.skill1 = token.skill1;
        session.user.skill2 = token.skill2;
        session.user.skill3 = token.skill3;
        session.user.bio = token.bio;
      }
      return session;
    },
    async jwt({ token }) {
      const existingUser = await prisma.user.findUnique({
        where: { id: token.sub },
      });

      token.id = existingUser?.id;
      token.linkedin = existingUser?.linkedin;
      token.github = existingUser?.github;
      token.haveCompetence = existingUser?.haveCompetence;
      token.askCompetence = existingUser?.askCompetence;
      token.instagram = existingUser?.instagram;
      token.ownSite = existingUser?.ownSite;
      token.skill1 = existingUser?.skill1;
      token.skill2 = existingUser?.skill2;
      token.skill3 = existingUser?.skill3;
      token.bio = existingUser?.bio;

      return token;
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
