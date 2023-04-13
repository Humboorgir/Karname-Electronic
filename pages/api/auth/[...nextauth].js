import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import mongoConnect from "@/utils/mongoconnect";
import managersModel from "@/models/managers";
let returnedUser; // for caching purposes.
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
            name: "admin",
            username: "admin",
            password: "admin",
            pfp: "1",
            role: "admin",
          },
        ];
        // first, establish connection with the mongodb database.
        mongoConnect();
        // then, check to see if any managers are stored in the database.
        let storedManagers = await managersModel.find({});
        // if yes, look for someone with the provided information in the database,
        // if not, use the default 'admin' username and password.
        let user = storedManagers.length
          ? await managersModel.findOne({
              username: username,
              password: password,
            })
          : defaultAdmins.find(
              (admin) =>
                admin.username === username && admin.password === password
            );
        // if the username and password provided matches none, it returns an empty Array which we convert to a null variable.
        if (Array.isArray(user) && !user.length) user = null;
        if (user) {
          returnedUser = user;
          return user;
        } else {
          throw new Error("کاربر پیدا نشد");
        }
      },
    }),
  ],
  callbacks: {
    session({ session, token, user }) {
      if (!returnedUser) return session;
      session.user.role = returnedUser.role;
      session.user.pfp = returnedUser.pfp;
      return session;
    },
  },
};

export default NextAuth(authOptions);
