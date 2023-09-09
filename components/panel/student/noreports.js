import NoDataImage from "@/components/panel/student/nodataimage";

const NoReports = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <NoDataImage />
      <h2 className="text-2xl bold mt-4 px-2">کارنامه ای برای شما ثبت نشده است</h2>
      <p className="text-sm text-slate-700 max-w-md mt-1.5 px-2">
        ثبت کردن کارنامه دانش آموزان پروسه ای زمان بر است, در صورتی که از ثبت شده بودن کارنامه خود مطمئن هستید
        به نماینده های مدرسه خبر دهید
      </p>
      <h4 className="text-sm text-slate-700 mt-1.5">کد شناسایی دانش آموز: {global.student.id}</h4>
    </div>
  );
};

export default NoReports;
