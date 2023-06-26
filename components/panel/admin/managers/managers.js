import Manager from "@/components/panel/admin/managers/manager";

const Managers = ({ managers, openModal }) => {
  return (
    <>
      {managers &&
        managers.map(({ name, image }, i) => {
          return (
            <Manager id={i} name={name} image={image} openModal={openModal} />
          );
        })}
    </>
  );
};

export default Managers;
