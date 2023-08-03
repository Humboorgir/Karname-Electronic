import Chart from "@/components/panel/student/chart";

const ReportAnalysis = ({ reports }) => {
  function getMoadel(report) {
    let moadel = 0;
    for (const [key, value] of Object.entries(report)) {
      if (key == "name" || key == "id" || key == "studentId") continue;
      moadel = moadel + Number(value);
    }
    moadel = moadel / 12;
    moadel = Math.round((moadel + Number.EPSILON) * 100) / 100;
    return moadel;
  }
  const moadel = getMoadel(reports[0]);
  let message;

  const messages = {
    perfect: {
      title: "آفرین!",
      description: "کارت عالی بود, همینجوری ادامه بده",
    },
    veryGood: {
      title: "آفرین!",
      description: "کارت خوب بود ولی جای پیشرفت داره",
    },
    good: {
      title: "خوبه",
      description: "کارت خوب بود ولی جای پیشرفت داره",
    },
    normal: {
      title: "بد نیست",
      description: "اگه میخوای پیشرفت کنی باید بیشتر تلاش کنی",
    },
    bad: {
      title: "خوب نیست",
      description: "اینجوری نمیشه پیش رفت, باید بیشتر تلاش کنی",
    },
  };

  if (moadel >= 19.5) message = messages.perfect;
  else if (moadel >= 19) message = messages.veryGood;
  else if (moadel >= 18) message = messages.good;
  else if (moadel >= 16) message = messages.normal;
  else if (moadel < 16) message = messages.bad;
  return (
    <div className="flex flex-wrap justify-center items-center gap-16 w-full flex-row mt-16">
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl bold mt-4 px-2">بررسی آخرین کارنامه شما</h2>
        <Chart reports={reports} />
      </div>
      <div className="flex flex-col items-center mb-10">
        <h2 className="text-6xl mt-4 mr-4 bold px-2 text-right">{message.title}</h2>
        <p className="mt-3 text-base text-slate-700 max-w-[380px] text-right">{message.description}</p>
        <button className="btn btn-info bg-blue hover:bg-sky-500 text-white mt-2 px-20">
          مشاهده کارنامه
        </button>
      </div>
    </div>
  );
};

export default ReportAnalysis;
