import Image from "next/image";

const ReportCard = ({ report }) => {
  function getData(report) {
    let majmoo = 0;
    let moadel = 0;
    for (const [key, value] of Object.entries(report)) {
      if (key == "name" || key == "id" || key == "studentId") continue;
      moadel = moadel + Number(value);
      majmoo = majmoo + Number(value);
    }
    moadel = moadel / 12;
    moadel = Math.round((moadel + Number.EPSILON) * 100) / 100;
    return [moadel, majmoo];
  }

  const [moadel, majmoo] = getData(report);

  return (
    <div
      className="mx-auto border border-neutral-400 
    rounded-lg flex flex-col pt-[53px] shadow-xl w-[600px] relative">
      <h1
        className="flex text-[24px] items-center justify-end bg-blue text-white top-0 left-0 
        rounded-t-lg absolute w-[calc(100%+4px)] ml-[-2px] h-[55px] mt-[-2px] px-[5%]">
        {report.name}
      </h1>

      {/* marks */}
      <div className="flex items-center rounded-lg">
        {/* first column(s) */}
        <div className="flex flex-col items-center w-full border-r-2 border-r-neutral-400">
          <Row subject="ریاضی" mark={report.riazi} />
          <Row subject="علوم" mark={report.oloom} />
          <Row subject="فارسی" mark={report.farsi} />
          <Row subject="اجتماعی" mark={report.ejtemai} />
          <Row subject="دینی" mark={report.dini} />
          <Row subject="زبان" mark={report.zaban} />
          <Row subject="معدل" mark={moadel} />
        </div>
        {/* second column(s) */}
        <div className="flex flex-col items-center w-full">
          <Row subject="عربی" mark={report.arabi} />
          <Row subject="دفاعی" mark={report.defai} />
          <Row subject="فناوری" mark={report.fanavari} />
          <Row subject="ورزش" mark={report.varzesh} />
          <Row subject="هنر" mark={report.honar} />
          <Row subject="انضباط" mark={report.enzebat} />
          <Row subject="مجموع" mark={majmoo} />
        </div>
      </div>
      {/* marks end  */}

      {/* additional info  */}
      <div className="rounded-b-lg py-1.5 px-8 flex items-center border-t-2 border-t-neutral-400 bg-neutral-100">
        <Image
          src={`/defaultStudent${global.student.image}.svg`}
          width={45}
          height={45}
          alt={global.student.name}
        />
        <div className="flex flex-col items-center ml-[12px]">
          <h2 className="text-sm mb-0.5">{global.student.name}</h2>
          <p className="text-sm text-neutral-800">معدل: {moadel}</p>
        </div>
        <div className="text-sm max-w-xs ml-auto">تهیه شده توسط کارنامه الکترونیک</div>
      </div>
      {/* additional info end  */}
    </div>
  );
};

const Row = ({ subject, mark }) => {
  return (
    <div
      className="w-full py-1.5 pl-[65%] justify-start bg-neutral-200 even:!bg-neutral-100 
    flex items-center gap-4 text-[17px]">
      <span>{mark}</span>
      <span>{subject}</span>
    </div>
  );
};

export default ReportCard;
