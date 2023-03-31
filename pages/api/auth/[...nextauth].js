import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import mongoConnect from "@/utils/mongoconnect";
import managersModel from "@/models/managers";
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
        const { username, password } = credentials;
        let defaultAdmins = [
          {
            username: "admin",
            password: "admin",
          },
        ];
        // first, establish connection with the mongodb database.
        mongoConnect();
        // then, check to see if any managers are stored in the database.
        let storedManagers = await managersModel.find({});
        // if yes, look for someone with the provided information in the database,
        // if not, use the default 'admin' username and password.
        let user = storedManagers.length
          ? await managersModel.find({ username: username, password: password })
          : defaultAdmins.find(
              (admin) =>
                admin.username === username && admin.password === password
            );
        // if the username and password provided matches none, it returns an empty Array which we convert to a null variable.
        if (Array.isArray(user) && !user.length) user = null;
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
