import Layout from "@/layouts/panel-layout";
import Title from "@/components/panel/teacher/student/title";
import Description from "@/components/panel/teacher/student/description";
import KarnameButton from "@/components/panel/teacher/student/karnamebutton";
import Image from "@/components/panel/teacher/student/image";
import ReportCards from "@/components/panel/teacher/student/reportcards";
import KarnameModal from "@/components/panel/teacher/student/karnamemodal";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Student = () => {
  const router = useRouter();

  const [student, setStudent] = useState({});
  global.student = student;

  const [reports, setReports] = useState([]);

  useEffect(() => {
    const { studentId } = router.query;
    if (!studentId) return;

    fetch(`/api/student/${studentId}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((data) => {
        setStudent(data);
        setReports(data.reports);
      });
  }, [router.query]);

  const handleClick = () => {
    window.karnameModal.showModal();
  };
  return (
    <Layout>
      <section className="flex flex-col items-center justify-center text-center mb-14 py-12">
        <Image student={student} />
        <Title student={student} />
        <Description />
        <KarnameButton handleClick={handleClick} student={student} />

        {Boolean(reports.length) && <ReportCards reports={reports} />}
      </section>

      <KarnameModal setReports={setReports} />
    </Layout>
  );
};

export default Student;
