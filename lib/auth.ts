import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export const authOptions: NextAuthOptions = {
  // ─── Strategy ────────────────────────────────────────────────────────────
  session: {
    strategy: "jwt",
    maxAge: 7 * 24 * 60 * 60, // 7 days
  },

  // ─── Pages ───────────────────────────────────────────────────────────────
  pages: {
    signIn: "/login",
    error: "/login", // Auth errors redirect here (appended as ?error=...)
  },

  // ─── Providers ───────────────────────────────────────────────────────────
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email.toLowerCase().trim() },
        });

        if (!user) {
          // Consistent timing to prevent user-enumeration attacks
          await bcrypt.compare("dummy", "$2b$12$dummyhashfortimingequalityxyz");
          return null;
        }

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password,
        );
        if (!isValid) {
          return null;
        }

        // Return the shape expected by JWT callback
        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        };
      },
    }),
  ],

  // ─── Callbacks ───────────────────────────────────────────────────────────
  callbacks: {
    /**
     * jwt() — runs whenever a token is created/updated.
     * Embed the user's id and role into the JWT payload here.
     */
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = (user as { id: string; role: string }).role;
      }
      return token;
    },

    /**
     * session() — runs whenever getServerSession() / useSession() is called.
     * Expose id and role to the client via the session object.
     */
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
      }
      return session;
    },
  },

  // ─── Security ────────────────────────────────────────────────────────────
  secret: process.env.NEXTAUTH_SECRET,
  // HTTP-only secure cookies are the NextAuth default in production
  useSecureCookies: process.env.NODE_ENV === "production",
};
