import Teacher from "@/components/panel/admin/teachers/teacher";

const Teachers = ({ teachers, openModal }) => {
  return (
    <>
      {teachers &&
        teachers.map(({ id, name, image }) => {
          return (
            <Student id={id} name={name} image={image} openModal={openModal} />
          );
        })}
    </>
  );
};

export default Teachers;
