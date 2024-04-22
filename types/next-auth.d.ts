// eslint-disable-next-line no-unused-vars
import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    email: string;
    role: string;
    id: string;
  }

  export interface Session {
    user: User & {
      email: string;
      role: string;
      id: string;
    };
    token: {
      email: string;
      role: string;
      id: string;
    };
    role: string;
    id: string;
  }
}
