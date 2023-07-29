import Lesson from "@/components/panel/teacher/student/lesson";

const Lessons = ({ lessons }) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 my-5">
      {lessons.map(({ title, url }) => {
        return <Lesson title={title} url={url} />;
      })}
    </div>
  );
};

export default Lessons;
