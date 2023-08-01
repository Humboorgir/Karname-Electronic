import ReportCard from "@/components/panel/teacher/student/reportcard";

const ReportCards = ({ reports }) => {
  return (
    <>
      {reports.map((report) => {
        return <ReportCard report={report} />;
      })}
    </>
  );
};

export default ReportCards;
