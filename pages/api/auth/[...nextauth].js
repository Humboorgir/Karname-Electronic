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
          console.log("user found!");
          return user;
        } else {
          console.log("User not found!");
          throw new Error("User not found");
        }
      },
    }),
  ],
};

export default NextAuth(authOptions);
