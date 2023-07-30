import Head from "@/components/head";
import Navbar from "@/components/panel/teacher/navbar";
import Title from "@/components/panel/teacher/student/title";
import Description from "@/components/panel/teacher/student/description";
import KarnameButton from "@/components/panel/teacher/student/karnamebutton";
import StudentPicture from "@/components/panel/teacher/student/studentpicture";
import Footer from "@/components/footer";
import { useSession } from "next-auth/react";

const Student = ({ student }) => {
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
    <div className="flex flex-col min-h-[100svh] gap-16">
      <Head page="درگاه مدیریت" />
      <Navbar />

      {/* hero */}
      <div className="flex items-center justify-center h-max gap-4 relative">
        <StudentPicture student={student} />
        <div>
          <Title student={student} />
          <Description />
          <KarnameButton />
        </div>
      </div>
      {/* hero end  */}

      <Footer className="mt-auto" />
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
