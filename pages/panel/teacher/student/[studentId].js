import Head from "@/components/head";
import Navbar from "@/components/panel/teacher/navbar";
import Title from "@/components/panel/teacher/student/title";
import Description from "@/components/panel/teacher/student/description";
import KarnameButton from "@/components/panel/teacher/student/karnamebutton";
import Image from "@/components/panel/teacher/student/image";
import ReportCards from "@/components/panel/teacher/student/reportcards";
import KarnameModal from "@/components/panel/teacher/student/karnamemodal";
import Footer from "@/components/footer";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const Student = ({ student }) => {
  global.student = student;

  const [reports, setReports] = useState([]);
  const { data: session, status } = useSession();

  useEffect(() => {
    setReports(student.reports);
  }, []);

  const handleClick = () => {
    window.karnameModal.showModal();
  };

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
    <div className="flex flex-col min-h-[100svh] gap-16">
      <Head page="درگاه مدیریت" />
      <Navbar />

      {/* hero */}
      <section className="flex flex-col items-center justify-center h-max mb-16 text-center">
        <Image student={student} />
        <Title student={student} />
        <Description />
        <KarnameButton handleClick={handleClick} student={student} />
      </section>
      {/* hero end  */}

      <ReportCards reports={reports} />
      <Footer className="mt-auto" />

      <KarnameModal setReports={setReports} />
    </div>
  );
};

export async function getServerSideProps(context) {
  let student = await fetch(`${process.env.NEXTAUTH_URL}/api/student/${context.query.studentId}`, {
    method: "GET",
  });
  student = await student.json();
  return {
    props: { student },
  };
}

export default Student;
