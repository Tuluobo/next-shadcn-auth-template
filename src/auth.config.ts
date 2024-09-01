import type { NextAuthConfig } from "next-auth";
import GitHub from "next-auth/providers/github";

// Notice this is only an object, not a full Auth.js instance
export default {
  providers: [GitHub],
} satisfies NextAuthConfig;
