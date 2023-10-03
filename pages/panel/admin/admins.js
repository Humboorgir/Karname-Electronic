import Layout from "@/layouts/panel-layout";
import Admins from "@/components/panel/admin/admins/admins";
import AddAdmin from "@/components/panel/admin/admins/addadmin";
import AddModal from "@/components/panel/admin/admins/addmodal";
import EditModal from "@/components/panel/admin/admins/editmodal";
import DeleteModal from "@/components/panel/admin/admins/deletemodal";

import { useState, useEffect } from "react";

const AdminsPage = () => {
  const [admins, setAdmins] = useState([]);

  const [adminId, setAdminId] = useState(null);

  useEffect(() => {
    fetch("/api/admins", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((data) => setAdmins(data));
  }, []);

  function openModal(modal, id) {
    if (id) setAdminId(id);

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
    <Layout>
      {/* the main part of the page */}
      <div className="flex flex-col justify-center items-center h-max">
        {/* The list containing admins' data */}
        <ul
          className="shadow-xl px-3 pb-2 pt-[70px] w-[min(500px,95vw)] h-max rounded-lg border-2 border-neutral-300
      flex flex-col gap-3 relative">
          <h1
            key="title"
            className="flex items-center justify-end bg-red-500 text-white top-0 left-0 
        rounded-t-lg absolute w-[calc(100%+4px)] ml-[-2px] h-[55px] mt-[-2px] px-[5%]">
            لیست نمایندگان
          </h1>
          <Admins admins={admins} openModal={openModal} />
          {/* add admins */}
          <AddAdmin openModal={openModal} />
        </ul>
      </div>

      {/* modals  */}
      <AddModal setAdmins={setAdmins} />
      <EditModal setAdmins={setAdmins} adminId={adminId} />
      <DeleteModal setAdmins={setAdmins} adminId={adminId} />
    </Layout>
  );
};

export default AdminsPage;
