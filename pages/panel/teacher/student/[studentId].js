import Head from "@/components/head";
import Navbar from "@/components/panel/teacher/navbar";
import Lessons from "@/components/panel/teacher/student/lessons";
import Footer from "@/components/footer";

import { useRouter } from "next/router";

const Student = () => {
  const router = useRouter();
  const lessons = [
    {
      title: "علوم",
      url: "/olom",
    },
    {
      title: "ریاضی",
      url: "/riazi",
    },
    {
      title: "فارسی",
      url: "/farsi",
    },
  ];
  return (
    <div className="flex flex-col min-h-[100svh]">
      <Head page="ارسال نمرات" />
      <Navbar />
      <div className="flex flex-col items-center my-20">
        <h1 className="text-2xl mb-2 bold">{router.query.studentId}</h1>
        <p className="text-sm text-slate-700">برای ثبت نمره دانش آموز یکی از دروس زیر را انتخاب کنید</p>
        <Lessons lessons={lessons} />
      </div>
      <Footer />
    </div>
  );
};

export default Student;
