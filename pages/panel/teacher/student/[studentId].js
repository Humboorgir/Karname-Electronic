import Head from "@/components/head";
import Navbar from "@/components/panel/teacher/navbar";
import Title from "@/components/panel/teacher/student/title";
import Description from "@/components/panel/teacher/student/description";
import KarnameButton from "@/components/panel/teacher/student/karnamebutton";
import Image from "@/components/panel/teacher/student/image";
import KarnameModal from "@/components/panel/teacher/student/karnamemodal";
import Footer from "@/components/footer";
import { useSession } from "next-auth/react";

const Student = ({ student }) => {
  global.student = student;
  const { data: session, status } = useSession();

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
      <div className="flex flex-col items-center justify-center h-max mb-16 text-center">
        {!student.reports?.length && (
          <>
            <Image student={student} />
            <Title student={student} />
            <Description />
            <KarnameButton handleClick={handleClick} student={student} />
          </>
        )}
      </div>
      {/* hero end  */}
      <Footer className="mt-auto" />

      <KarnameModal handleSubmit={handleSubmit} />
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

async function handleSubmit(e) {
  const data = {
    name: e.target.name.value,
    riazi: Number(e.target.riazi.value),
    oloom: Number(e.target.oloom.value),
    farsi: Number(e.target.farsi.value),
    ejtemai: Number(e.target.ejtemai.value),
    dini: Number(e.target.dini.value),
    zaban: Number(e.target.zaban.value),
    arabi: Number(e.target.arabi.value),
    varzesh: Number(e.target.varzesh.value),
    honar: Number(e.target.honar.value),
    fanavari: Number(e.target.fanavari.value),
    defai: Number(e.target.defai.value),
    enzebat: Number(e.target.enzebat.value),
  };

  await fetch(`${window.location.origin}/api/student/${global.student.id}`, {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export default Student;
