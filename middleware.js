import NextAuth from "next-auth";
import { authconfig } from "./app/authconfig";

export default NextAuth(authconfig).auth;

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next).*)"],
};
