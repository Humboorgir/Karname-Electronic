import Layout from "@/layouts/panel-layout";
import NoReports from "@/components/panel/student/noreports";
import ReportAnalysis from "@/components/panel/student/reportanalysis";
import ReportCards from "@/components/panel/student/reportcards";

import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";

const Student = ({ student }) => {
  global.student = student;

  const [reports, setReports] = useState([]);

  useEffect(() => {
    setReports(student.reports);
  }, []);

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
