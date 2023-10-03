import Admin from "@/components/panel/admin/admins/admin";

const Admins = ({ admins, openModal }) => {
  return (
    <>
      {admins &&
        admins.map(({ id, name, image }) => {
          return <Admin id={id} name={name} image={image} openModal={openModal} />;
        })}
    </>
  );
};

export default Admins;
