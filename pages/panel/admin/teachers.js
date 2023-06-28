import Head from "@/components/head";
import Navbar from "@/components/panel/admin/navbar";
import Footer from "@/components/footer";

import Teachers from "@/components/panel/admin/teachers/teachers";
import AddTeacher from "@/components/panel/admin/teachers/addteacher";
import AddModal from "@/components/panel/admin/teachers/addmodal";
import EditModal from "@/components/panel/admin/teachers/editmodal";
import DeleteModal from "@/components/panel/admin/teachers/deletemodal";

import { useState, useEffect } from "react";

const TeachersPage = ({ teachers_ }) => {
  const [teachers, setTeachers] = useState([]);

  const [teacherId, setTeacherId] = useState(null);
  useEffect(() => {
    setTeachers(teachers_);
  }, []);

  function openModal(modal, id) {
    if (id) setTeacherId(id);

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
      <Head page="مدیریت دبیران " />
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
            className="flex items-center justify-end bg-blue text-white top-0 left-0 
        rounded-t-lg absolute w-[calc(100%+4px)] ml-[-2px] h-[55px] mt-[-2px] px-[5%]"
          >
            لیست دبیران
          </h1>
          <Teachers teachers={teachers} openModal={openModal} />
          {/* add managers */}
          <AddTeacher openModal={openModal} />
        </ul>
      </div>
      <Footer />

      {/* modals  */}
      <AddModal setTeachers={setTeachers} />
      <EditModal setTeachers={setTeachers} teacherId={teacherId} />
      <DeleteModal setTeachers={setTeachers} teacherId={teacherId} />
    </div>
  );
};
export async function getServerSideProps() {
  let teachers = await fetch(`${process.env.NEXTAUTH_URL}/api/teachers`, {
    method: "GET",
  });
  let Teachers = await teachers.json();
  return {
    props: { teachers_: Teachers },
  };
}
export default TeachersPage;
