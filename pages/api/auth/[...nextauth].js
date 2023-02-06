import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  debug: true,
  pages: {
    signIn: "/login/admin",
    error: "/login/admin",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      type: "credentials",

      async authorize(credentials, req) {
        console.log("test");
        const admins = [
          {
            username: "admin",
            password: "admin",
          },
        ];
        const user = admins.find(
          (admin) =>
            admin.username === credentials.username &&
            admin.password === credentials.password
        );
        if (user) {
          return user;
        } else {
          throw new Error("کاربر پیدا نشد");
        }
      },
    }),
  ],
  callbacks: {
    async session({ session }) {
      session.user.role = "admin";
      return session;
    },
  },
};

export default NextAuth(authOptions);
