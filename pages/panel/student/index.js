import Layout from "@/layouts/panel-layout";
import NoReports from "@/components/panel/student/noreports";
import ReportAnalysis from "@/components/panel/student/reportanalysis";
import ReportCards from "@/components/panel/student/reportcards";

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
      <div
        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-blue
        flex items-center gap-3 text-xl">
        <span className="loading loading-lg loading-spinner mb-1.5" /> Loading
      </div>
    );

  if (status === "unauthenticated" || session.user.position !== "دانش آموز")
    return (
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        ACCESSS DENIED
      </div>
    );
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-max mb-8 text-center">
        {Boolean(!global.student.reports?.length) && <NoReports />}
        {Boolean(global.student.reports?.length) && <ReportAnalysis reports={reports} />}
      </div>
      {Boolean(global.student.reports?.length) && <ReportCards reports={reports} />}
    </Layout>
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
