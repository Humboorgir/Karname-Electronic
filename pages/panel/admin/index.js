import Head from "@/components/head";
import Layout from "@/layouts/panel-layout";
import Panel from "@/components/panel/admin/panel";
import { useSession } from "next-auth/react";
const admin = () => {
  const { data: session, status } = useSession();
  if (status === "loading")
    return (
      <>
        <Head page="درگاه مدیریت" />
        <div
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-blue
        flex items-center gap-3 text-xl">
          <span className="loading loading-lg loading-spinner mb-1.5" /> Loading
        </div>
      </>
    );

  if (status === "unauthenticated" || session.user.position !== "نماینده")
    return (
      <>
        <Head page="admin protected page" />
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          ACCESSS DENIED
        </div>
      </>
    );
  return (
    <Layout>
      <Panel />
    </Layout>
  );
};

export default admin;
