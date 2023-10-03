import Layout from "@/layouts/panel-layout";
import NoReports from "@/components/panel/student/noreports";
import ReportAnalysis from "@/components/panel/student/reportanalysis";
import ReportCards from "@/components/panel/student/reportcards";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const Student = () => {
  const { data: session, status } = useSession();

  const [student, setStudent] = useState([]);
  global.student = student;
  const [reports, setReports] = useState([]);

  useEffect(() => {
    if (status != "authenticated") return;
    fetch(`/api/student/${session.user.id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((data) => {
        setStudent(data);
        setReports(data.reports);
      });
  }, [status]);

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

export default Student;
