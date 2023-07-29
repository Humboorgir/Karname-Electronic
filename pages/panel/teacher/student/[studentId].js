import Head from "@/components/head";
import Navbar from "@/components/panel/teacher/navbar";
import Footer from "@/components/footer";

import { useRouter } from "next/router";

const Student = () => {
  const router = useRouter();
  return (
    <>
      <Head page="ارسال نمرات" />
      <div className="flex flex-col justify-between">
        <Navbar />
        <div className="flex flex-col items-center">
          <h1 className="text-2xl mb-1">{router.query.studentId}</h1>
          <p className="text-sm text-slate-700">برای ثبت نمره دانش آموز یکی از دروس زیر را انتخاب کنید.</p>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Student;
