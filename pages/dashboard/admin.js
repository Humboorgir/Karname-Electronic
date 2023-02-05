import Head from "@/components/head";
import { SessionProvider, useSession, signOut } from "next-auth/react";
const admin = () => {
  const { data: session } = useSession();
  if (session)
    return (
      <>
        <Head page="admin protected page" />
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          signed in!
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      </>
    );
  return (
    <>
      <Head page="admin protected page" />
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        not signed in!
      </div>
    </>
  );
};

export default admin;
