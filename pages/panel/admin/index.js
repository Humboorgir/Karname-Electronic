import Head from "@/components/head";
import Header from "@/components/Panel/admin/header";
import Panel from "@/components/Panel/admin/panel";
import Footer from "@/components/footer";
import { useSession, getSession } from "next-auth/react";
const admin = () => {
  const { data: session, status } = useSession();
  if (status === "loading")
    return (
      <>
        <Head page="درگاه مدیریت" />
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          loading...
        </div>
      </>
    );

  if (status === "unauthenticated" || session.user.role !== "admin")
    return (
      <>
        <Head page="admin protected page" />
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          ACCESSS DENIED
        </div>
      </>
    );
  return (
    <div className="flex flex-col min-h-[100svh] justify-between">
      <Head page="درگاه مدیریت" />
      <Header />
      <Panel />
      <Footer />
    </div>
  );
};

export default admin;
