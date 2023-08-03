import ReportCard from "@/components/panel/teacher/student/reportcard";

const ReportCards = ({ reports }) => {
  return (
    <div className="flex flex-col gap-16 mt-[180px]">
      {reports.map((report) => {
        return <ReportCard report={report} />;
      })}
    </div>
  );
};

export default ReportCards;
