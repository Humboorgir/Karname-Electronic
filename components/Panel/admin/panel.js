const Panel = () => {
  return (
    <div className="flex flex-row gap-5 justify-center items-center h-[65vh]">
      <a
        href="/panel/admin/students"
        className="flex flex-col items-center justify-center gap-3 bg-blue text-white
      h-[300px] w-[300px] rounded-lg shadow-2xl cursor-pointer scale-100 transition-transform ease-in-out
       duration-500 hover:scale-105 hover:ease-in-out hover:transition-transform hover:duration-500
       active:scale-95 active:ease-in-out active:transition-transform active:duration-300"
      >
        <img className="h-[200px]" src="/student.svg" />
        <span className="text-[23px]">مدیریت دانش آموزان</span>
      </a>
      <a
        href="/panel/admin/teachers"
        className="flex flex-col items-center justify-center gap-3 bg-blue text-white
      h-[300px] w-[300px] rounded-lg shadow-2xl cursor-pointer scale-100 transition-transform ease-in-out
      duration-500 hover:scale-105 hover:ease-in-out hover:transition-transform hover:duration-500
      active:scale-95 active:ease-in-out active:transition-transform active:duration-300"
      >
        <img className="h-[200px]" src="/teacher.svg" />
        <span className="text-[23px]">مدیریت معلمان </span>
      </a>
      <a
        href="/panel/admin/managers"
        className="flex flex-col items-center justify-center gap-3 bg-blue text-white
      h-[300px] w-[300px] rounded-lg shadow-2xl cursor-pointer scale-100 transition-transform ease-in-out
      duration-500 hover:scale-105 hover:ease-in-out hover:transition-transform hover:duration-500
      active:scale-95 active:ease-in-out active:transition-transform active:duration-300"
      >
        <img className="h-[200px]" src="/manager.svg" />
        <span className="text-[23px]">مدیریت نمایندگان </span>
      </a>
    </div>
  );
};

export default Panel;
