const Lessons = ({ lessons }) => {
  return (
    <>
      {lessons.map(({ title, url }) => {
        return <Lesson title={title} url={url} />;
      })}
    </>
  );
};

export default Lessons;
