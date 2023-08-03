const Chart = ({ reports }) => {
  const subjects = {
    riazi: "ریاضی",
    oloom: "علوم",
    farsi: "فارسی",
    ejtemai: "اجتماعی",
    dini: "دینی",
    zaban: "زبان",
    arabi: "عربی",
    varzesh: "ورزش",
    honar: "هنر",
    defai: "دفاعی",
    fanavari: "فناوری",
    enzebat: "انضباط",
  };
  return (
    <div className="flex items-end border-b-2 border-b-neutral-500 mt-10 h-[20vw] w-[min(auto,90vw)] max-w-[700px]">
      {/* first column  */}
      <div className="flex flex-col h-full justify-between border-r-2 border-r-neutral-500">
        {["۲۰", "۱۵", "۱۰", "۵", "۰"].map((x) => (
          <span className="text-[1.2vw] border-b-2 border-b-neutral-500 last-of-type:border-0 px-[0.6vw]">
            {x}
          </span>
        ))}
      </div>
      {/* first column end  */}
      {/* second column  */}
      {Object.entries(reports[0]).map(([key, value]) => {
        if (key == "name" || key == "id" || key == "studentId") return;
        return (
          <div
            className="relative flex bg-blue flex-col w-[3.5vw] md:w-[2.5vw] ml-[3.2vw] md:ml-[1.4vw] 
            rounded-t-sm group hover:bg-sky-500"
            style={{ height: `${value * 5}%` }}>
            <div
              className="flex flex-col items-start absolute left-0 bottom-full z-10 
              w-max py-1 px-2 rounded-lg bg-white border border-neutral-400 transition-all scale-0
               opacity-0 group-hover:scale-100 group-hover:opacity-100 mb-2 ">
              <h2 className="text-base font-bold">{subjects[key]}</h2>
              <p>{value}</p>
            </div>
            <div className="absolute top-full text-[1.6vw] md:text-[1.05vw] mt-2">{subjects[key]}</div>
          </div>
        );
      })}
      {/* second column end  */}
    </div>
  );
};

export default Chart;
