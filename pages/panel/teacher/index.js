import Head from "@/components/head";
import Header from "@/components/panel/teacher/navbar";
import Panel from "@/components/panel/teacher/panel";
import Footer from "@/components/footer";
import { useSession, getSession } from "next-auth/react";
const admin = ({ students }) => {
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

  if (status === "unauthenticated" || session.user.position !== "دبیر")
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
      <Panel students={students} />
      <Footer />
    </div>
  );
};

export async function getServerSideProps() {
  let students = await fetch(`${process.env.NEXTAUTH_URL}/api/students`, {
    method: "GET",
  });
  let Students = await students.json();
  return {
    props: { students: Students },
  };
}

export default admin;
