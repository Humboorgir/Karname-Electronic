const Panel = () => {
  return (
    <div className="flex flex-row gap-5 justify-center items-center h-[65vh]">
      <div
        className="flex flex-col items-center justify-center gap-3 bg-blue text-white
      h-[300px] w-[300px] rounded-lg shadow-2xl"
      >
        <img className="h-[200px]" src="/student.svg" />
        <span className="text-[23px]">مدیریت دانش آموزان</span>
      </div>
      <div
        className="flex flex-col items-center justify-center gap-3 bg-blue text-white
      h-[300px] w-[300px] rounded-lg shadow-2xl"
      >
        <img className="h-[200px]" src="/teacher.svg" />
        <span className="text-[23px]">مدیریت معلمان </span>
      </div>
      <div
        className="flex flex-col items-center justify-center gap-3 bg-blue text-white
      h-[300px] w-[300px] rounded-lg shadow-2xl"
      >
        <img className="h-[200px]" src="/admin.svg" />
        <span className="text-[23px]">مدیریت نمایندگان </span>
      </div>
    </div>
  );
};

export default Panel;
