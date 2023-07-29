import Lesson from "@/components/panel/teacher/student/lesson";

const Lessons = ({ lessons }) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 my-5 max-w-xl">
      {lessons.map(({ title, url }) => {
        return <Lesson title={title} url={url} />;
      })}
    </div>
  );
};

export default Lessons;
