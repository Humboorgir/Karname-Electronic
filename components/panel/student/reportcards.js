import ReportCard from "@/components/panel/student/reportcard";

const ReportCards = ({ reports }) => {
  return (
    <section id="reportcards" className="flex flex-col gap-16 mt-[180px] px-2.5 mb-[100px]">
      {reports.map((report) => {
        return <ReportCard report={report} />;
      })}
    </section>
  );
};

export default ReportCards;
