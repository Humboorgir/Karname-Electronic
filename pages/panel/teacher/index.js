import Head from "@/components/head";
import Navbar from "@/components/panel/teacher/navbar";
import Lessons from "@/components/panel/teacher/lessons";
import Footer from "@/components/footer";

const Student = () => {
  const lessons = [
    {
      title: "علوم",
    },
    {
      title: "ریاضی",
    },
    {
      title: "فارسی",
    },
    {
      title: "هنز",
    },
    {
      title: "قرآن",
    },
    {
      title: "زبان",
    },
    {
      title: "عربی",
    },
    {
      title: "ورزش",
    },
  ];
  return (
    <div className="flex flex-col min-h-[100svh] justify-between">
      <Head page="ارسال نمرات" />
      <Navbar />
      <div className="flex flex-col items-center my-20">
        <h1 className="text-2xl mb-2 bold">خوش آمدید</h1>
        <p className="text-sm text-slate-700">
          برای تغییر یا ثبت نمرات دانش آموزان یکی از دروس زیر را انتخاب کنید
        </p>
        <Lessons lessons={lessons} />
      </div>
      <Footer />
    </div>
  );
};

export default Student;
