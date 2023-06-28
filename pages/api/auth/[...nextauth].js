import prisma from "@/lib/prisma";
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
        // get the provided username and password
        const { username, password } = credentials;

        // defining the default admins
        // these are only valid if there are no admins stored on the database
        let defaultAdmins = [
          {
            name: "Manager",
            username: "admin",
            password: "admin",
            image: "1",
            role: "manager",
          },
        ];

        // then, check to see if any managers are stored in the database.
        let storedManagers = await prisma.manager.findMany();
        // if yes, look for someone with the provided information in the database,
        // if not, use the default 'admin' username and password.
        let user = storedManagers.length
          ? // if yes, the user object equals to:
            await prisma.manager.findFirst({
              where: {
                username: username,
                password: password,
              },
            })
          : // if not, the user object equals to:
            defaultAdmins.find(
              (admin) =>
                admin.username === username && admin.password === password
            );
        // if the username and password provided matches none, it returns an empty Array which we convert to a null variable.
        if (Array.isArray(user) && !user.length) user = null;
        if (!user.role) user.role = "manager";
        if (user) {
          console.table(user);
          return user;
        } else {
          throw new Error("کاربر پیدا نشد");
        }
      },
    }),
  ],
  callbacks: {
    session({ token, session }) {
      if (token) {
        session.user.name = token.name;
        session.user.role = token.role;
        session.user.image = token.image;
      }

      return session;
    },
    jwt({ token, user }) {
      if (!user) return token;

      return {
        name: user.name,
        role: user.role,
        image: user.image,
      };
    },
  },
};

export default NextAuth(authOptions);
