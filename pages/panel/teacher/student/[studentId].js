import Head from "@/components/head";
import Header from "@/components/panel/teacher/navbar";
import Students from "@/components/panel/teacher/students";
import Footer from "@/components/footer";

import { useSession, getSession } from "next-auth/react";
import { useRouter } from "next/router";

const Student = ({ student }) => {
  console.log(student);
  const router = useRouter();
  const { studentId } = router;

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
    <div className="flex flex-col min-h-[100svh] gap-12">
      <Head page="درگاه مدیریت" />
      <Header />
      <div className="flex flex-col justify-center items-center h-max">
        <h1>ویرایش نمرات </h1>
        {/* The list containing managers' data */}
        <span>{student.name}</span>
      </div>
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
