import Manager from "@/components/panel/admin/managers/manager";

const Students = ({ students, openModal }) => {
  return (
    <>
      {students &&
        students.map(({ id, name, image }) => {
          return (
            <Manager id={id} name={name} image={image} openModal={openModal} />
          );
        })}
    </>
  );
};

export default Students;
