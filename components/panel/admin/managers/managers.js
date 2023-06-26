import Manager from "@/components/panel/admin/managers/manager";

const Managers = ({ managers, openModal }) => {
  return (
    <>
      {managers &&
        managers.map(({ id, name, image }) => {
          return (
            <Manager id={id} name={name} image={image} openModal={openModal} />
          );
        })}
    </>
  );
};

export default Managers;
