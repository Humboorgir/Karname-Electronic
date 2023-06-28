import Student from "@/components/panel/admin/students/student";

const Students = ({ students, openModal }) => {
  return (
    <>
      {students &&
        students.map(({ id, name, image }) => {
          return (
            <Student id={id} name={name} image={image} openModal={openModal} />
          );
        })}
    </>
  );
};

export default Students;
