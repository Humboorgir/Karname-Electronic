import Head from "@/components/head";
import Navbar from "@/components/panel/student/navbar";
import NoReports from "@/components/panel/student/noreports";
import ReportCards from "@/components/panel/student/reportcards";
import Footer from "@/components/footer";

import { useSession, getSession } from "next-auth/react";
import { useEffect, useState } from "react";

const Student = ({ student }) => {
  global.student = student;

  const [reports, setReports] = useState([]);
  const { data: session, status } = useSession();

  useEffect(() => {
    setReports(student.reports);
  }, []);

  if (status === "loading")
    return (
      <>
        <Head page="test" />
        <div
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-blue
        flex items-center gap-3 text-xl">
          <span className="loading loading-lg loading-spinner mb-1.5" /> Loading
        </div>
      </>
    );

  if (status === "unauthenticated" || session.user.position !== "دانش آموز")
    return (
      <>
        <Head page="admin protected page" />
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          ACCESSS DENIED
        </div>
      </>
    );
  return (
    <div className="flex flex-col min-h-[100svh]">
      <Head page="درگاه مدیریت" />
      <Navbar />

      {/* hero */}
      <div className="flex flex-col items-center justify-center h-max mb-8 text-center">
        {!global.student.reports?.length && <NoReports />}
        <ReportCards reports={reports} />
      </div>
      {/* hero end  */}
      <Footer className="mt-auto" />
    </div>
  );
};

export async function getServerSideProps(context) {
  let session = await getSession(context);
  let student = await fetch(`${process.env.NEXTAUTH_URL}/api/student/${session.user.id}`, {
    method: "GET",
  });
  student = await student.json();
  return {
    props: { student },
  };
}

export default Student;
