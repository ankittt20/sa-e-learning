import type { AuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "./prisma";
import { compare } from "bcryptjs";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(db),
  secret: process.env.NEXTAUTH_SECRET,
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
        role: { label: "Role", type: "text" },
      },
      async authorize(credentials, req): Promise<User | null> {
        try {
          if (!credentials?.email || !credentials?.password) {
            return null;
          }

          if (credentials.role === "student") {
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

            return {
              id: `${existingUser.id}`,
              email: existingUser.email,
              name: existingUser.name,
              role: "student",
            };
          }

          if (credentials.role === "tutor") {
            const existingTutor = await db.tutor.findUnique({
              where: {
                email: credentials?.email,
              },
            });

            if (!existingTutor) {
              return null;
            }

            if (credentials.password && existingTutor.password) {
              const passwordMatch = await compare(
                credentials.password,
                existingTutor.password
              );

              if (!passwordMatch) {
                return null;
              }
            }

            return {
              id: `${existingTutor.id}`,
              email: existingTutor.email || "",
              name: existingTutor.name,
              role: "tutor",
            };
          }

          if (credentials.role === "admin") {
            const existingAdmin = await db.admin.findUnique({
              where: {
                email: credentials?.email,
              },
            });

            if (!existingAdmin) {
              return null;
            }

            if (credentials.password && existingAdmin.password) {
              const passwordMatch = await compare(
                credentials.password,
                existingAdmin.password
              );

              if (!passwordMatch) {
                return null;
              }
            }

            return {
              id: `${existingAdmin.id}`,
              email: existingAdmin.email || "",
              name: existingAdmin.name,
              role: "admin",
            };
          }

          if (credentials.role === "super-admin") {
            const existingSuperAdmin = await db.superAdmin.findUnique({
              where: {
                email: credentials?.email,
              },
            });

            if (!existingSuperAdmin) {
              return null;
            }

            if (credentials.password && existingSuperAdmin.password) {
              const passwordMatch = await compare(
                credentials.password,
                existingSuperAdmin.password
              );

              if (!passwordMatch) {
                return null;
              }
            }

            return {
              id: `${existingSuperAdmin.id}`,
              email: existingSuperAdmin.email || "",
              name: existingSuperAdmin.name,
              role: "super-admin",
            };
          }

          return null;
        } catch (e) {
          console.error(e);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          email: user.email,
          role: user.role,
          id: user.id,
        };
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = String(token.id);
        session.user.name = String(token.name);
        session.user.email = String(token.email);
        session.user.role = String(token.role);
      }
      return session;
    },
  },
};
