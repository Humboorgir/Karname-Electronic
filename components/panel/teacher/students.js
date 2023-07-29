import Student from "@/components/panel/teacher/student";

const Panel = ({ students }) => {
  return (
    <>
      {students &&
        students.map(({ name, image }) => {
          return <Student name={name} image={image} />;
        })}
    </>
  );
};

export default Panel;
