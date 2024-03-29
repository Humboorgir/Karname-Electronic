import Layout from "@/layouts/panel-layout";
import Students from "@/components/panel/admin/students/students";
import AddStudent from "@/components/panel/admin/students/addstudent";
import AddModal from "@/components/panel/admin/students/addmodal";
import EditModal from "@/components/panel/admin/students/editmodal";
import DeleteModal from "@/components/panel/admin/students/deletemodal";

import { useState, useEffect } from "react";

const StudentsPage = () => {
  const [students, setStudents] = useState([]);

  const [studentId, setStudentId] = useState(null);
  useEffect(() => {
    fetch("/api/students", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((data) => setStudents(data));
  }, []);

  function openModal(modal, id) {
    if (id) setStudentId(id);

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
      <div className="flex flex-col justify-center items-center h-max">
        {/* The list containing managers' data */}
        <ul
          className="shadow-xl px-3 pb-2 pt-[70px] w-[min(500px,95vw)] h-max rounded-lg border-2 border-neutral-300
      flex flex-col gap-3 relative">
          <h1
            key="title"
            className="flex items-center justify-end bg-blue text-white top-0 left-0 
        rounded-t-lg absolute w-[calc(100%+4px)] ml-[-2px] h-[55px] mt-[-2px] px-[5%]">
            لیست دانش آموزان
          </h1>
          <Students students={students} openModal={openModal} />
          {/* add managers */}
          <AddStudent openModal={openModal} />
        </ul>
      </div>

      {/* modals  */}
      <AddModal setStudents={setStudents} />
      <EditModal setStudents={setStudents} studentId={studentId} />
      <DeleteModal setStudents={setStudents} studentId={studentId} />
    </Layout>
  );
};
export default StudentsPage;
