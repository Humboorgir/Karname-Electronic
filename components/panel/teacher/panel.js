import Link from "next/link";
const Panel = () => {
  return (
    <div className="m-10 flex flex-row flex-wrap gap-5 justify-center items-center">
      <Link
        href="/panel/admin/students"
        className="flex flex-col items-center justify-center gap-3 bg-blue text-white
      h-[300px] w-[300px] rounded-lg shadow-2xl cursor-pointer scale-100 transition-transform ease-in-out
       duration-500 hover:scale-105 hover:ease-in-out hover:transition-transform hover:duration-500
       active:scale-95 active:ease-in-out active:transition-transform active:duration-300">
        <img className="h-[200px]" src="/student.svg" />
        <span className="text-[23px]">مدیریت دانش آموزان</span>
      </Link>
      <Link
        href="/panel/admin/teachers"
        className="flex flex-col items-center justify-center gap-3 bg-blue text-white
      h-[300px] w-[300px] rounded-lg shadow-2xl cursor-pointer scale-100 transition-transform ease-in-out
      duration-500 hover:scale-105 hover:ease-in-out hover:transition-transform hover:duration-500
      active:scale-95 active:ease-in-out active:transition-transform active:duration-300">
        <img className="h-[200px]" src="/teacher.svg" />
        <span className="text-[23px]">مدیریت معلمان </span>
      </Link>
      <Link
        href="/panel/admin/managers"
        className="flex flex-col items-center justify-center gap-3 bg-blue text-white
      h-[300px] w-[300px] rounded-lg shadow-2xl cursor-pointer scale-100 transition-transform ease-in-out
      duration-500 hover:scale-105 hover:ease-in-out hover:transition-transform hover:duration-500
      active:scale-95 active:ease-in-out active:transition-transform active:duration-300">
        <img className="h-[200px]" src="/manager.svg" />
        <span className="text-[23px]">مدیریت نمایندگان </span>
      </Link>
    </div>
  );
};

export default Panel;
