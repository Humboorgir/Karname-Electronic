import Head from "@/components/head";
import Header from "@/components/panel/teacher/navbar";
import Students from "@/components/panel/teacher/students";
import Footer from "@/components/footer";
import { useSession, getSession } from "next-auth/react";
const Student = ({ students }) => {
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
    <div className="flex flex-col min-h-[100svh] justify-center">
      <Head page="درگاه مدیریت" />
      <Header />
      <div className="flex flex-col justify-center items-center h-max">
        {/* The list containing managers' data */}
        <ul
          className="shadow-xl px-3 pb-2 pt-[70px] w-[min(500px,95vw)] h-max rounded-lg border-2 border-neutral-300
      flex flex-col gap-3 relative">
          <h1
            key="title"
            className="flex items-center justify-end bg-blue text-white top-0 left-0 
        rounded-t-lg absolute w-[calc(100%+4px)] ml-[-2px] h-[55px] mt-[-2px] px-[5%]">
            لیست دانش آموزان
          </h1>
          <Students students={students} />
        </ul>
      </div>
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

export default Student;
