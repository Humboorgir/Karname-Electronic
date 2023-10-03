import Layout from "@/layouts/panel-layout";
import Students from "@/components/panel/teacher/students";

import { useEffect, useState } from "react";

const Student = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetch("/api/students", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(students);
        setStudents(data);
      });
  }, []);
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center h-max">
        <h1 className="text-3xl mb-2 bold">خوش آمدید</h1>
        <p className="text-sm text-slate-700 mb-10">برای ثبت کارنامه دانش آموز روی نام شان کلیک کنید</p>
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
    </Layout>
  );
};

export default Student;
