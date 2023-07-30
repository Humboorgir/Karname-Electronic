import Head from "@/components/head";
import Navbar from "@/components/panel/teacher/navbar";
import Lessons from "@/components/panel/teacher/lessons";
import Footer from "@/components/footer";

const Student = () => {
  const basePath = "/panel/teacher/lesson";
  const lessons = [
    {
      title: "علوم",
      url: `${basePath}/oloom`,
    },
    {
      title: "ریاضی",
      url: `${basePath}/riazi`,
    },
    {
      title: "فارسی",
      url: `${basePath}/farsi`,
    },
    {
      title: "هنز",
      url: `${basePath}/honar`,
    },
    {
      title: "قرآن",
      url: `${basePath}/quran`,
    },
    {
      title: "زبان",
      url: `${basePath}/zaban`,
    },
    {
      title: "عربی",
      url: `${basePath}/arabi`,
    },
    {
      title: "ورزش",
      url: `${basePath}/varzesh`,
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
