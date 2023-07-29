import Student from "@/components/panel/teacher/student";

const Panel = ({ students }) => {
  return (
    <>
      {students &&
        students.map(({ id, name, image }) => {
          return <Student id={id} name={name} image={image} />;
        })}
    </>
  );
};

export default Panel;
