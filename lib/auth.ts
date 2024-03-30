import type { AuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "./prisma";
import { compare } from "bcrypt";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req): Promise<User | null> {
        try {
          if (!credentials?.email || !credentials?.password) {
            return null;
          }

          const existingUser = await db.user.findUnique({
            where: {
              email: credentials?.email,
            },
          });

          if (!existingUser) {
            return null;
          }

          if (credentials.password && existingUser.password) {
            const passwordMatch = await compare(
              credentials.password,
              existingUser.password
            );

            if (!passwordMatch) {
              return null;
            }
          }

          console.log(existingUser);

          return {
            id: `${existingUser.id}`,
            email: existingUser.email,
            name: existingUser.name,
          };
        } catch (e) {
          console.error(e);
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};
