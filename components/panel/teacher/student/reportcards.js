import ReportCard from "@/components/panel/teacher/student/reportcard";

const ReportCards = ({ reports }) => {
  return (
    <div className="flex flex-col gap-8 mt-16">
      {reports.map((report) => {
        return <ReportCard report={report} />;
      })}
    </div>
  );
};

export default ReportCards;
