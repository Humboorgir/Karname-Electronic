import Head from "@/components/head";
import Navbar from "@/components/panel/admin/navbar";
import Footer from "@/components/footer";

import Managers from "@/components/panel/admin/managers/managers";
import AddManager from "@/components/panel/admin/managers/addmanager";
import AddModal from "@/components/panel/admin/managers/addmodal";
import EditModal from "@/components/panel/admin/managers/editmodal";
import DeleteModal from "@/components/panel/admin/managers/deletemodal";

import { useState, useEffect } from "react";

const ManagersPage = ({ managers_ }) => {
  const [managers, setManagers] = useState([]);

  const [managerId, setManagerId] = useState(null);
  useEffect(() => {
    setManagers(managers_);
  }, []);

  function openModal(modal, id) {
    if (id) setManagerId(id);

    switch (modal) {
      case "add":
        window.addModal.showModal();
        break;
      case "edit":
        window.editModal.showModal();
        break;
      case "delete":
        window.deleteModal.showModal();
        break;
    }
    return;
  }
  return (
    <div className="flex flex-col min-h-[100svh] justify-between gap-5">
      <Head page="Manage managers" />
      <Navbar />

      {/* the main part of the page */}
      <div className="flex flex-col justify-center items-center h-max">
        {/* The list containing managers' data */}
        <ul
          className="shadow-xl px-3 pb-2 pt-[70px] w-[min(500px,95vw)] h-max rounded-lg border-2 border-neutral-300
      flex flex-col gap-3 relative"
        >
          <h1
            key="title"
            className="flex items-center justify-end bg-red-500 text-white top-0 left-0 
        rounded-t-lg absolute w-[calc(100%+4px)] ml-[-2px] h-[55px] mt-[-2px] px-[5%]"
          >
            Managers
          </h1>
          <Managers managers={managers} openModal={openModal} />
          {/* add managers */}
          <AddManager openModal={openModal} />
        </ul>
      </div>
      <Footer />

      {/* modals  */}
      <AddModal setManagers={setManagers} />
      <EditModal setManagers={setManagers} managerId={managerId} />
      <DeleteModal setManagers={setManagers} managerId={managerId} />
    </div>
  );
};
export async function getServerSideProps() {
  let managers = await fetch(`${process.env.NEXTAUTH_URL}/api/managers`, {
    method: "GET",
  });
  let Managers = await managers.json();
  return {
    props: { managers_: Managers },
  };
}
export default ManagersPage;
