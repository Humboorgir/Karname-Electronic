import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import Student from "@/components/Panel/admin/student";
import AddStudent from "@/components/Panel/admin/addstudent";
import RemoveStudent from "@/components/Panel/admin/removestudent";
import EditStudent from "@/components/Panel/admin/editstudent";
const StudentsPanel = ({ Students }) => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    setStudents(Students);
  }, []);
  // i prefer to use long and descriptive names for variables.
  const [openAddStudent, setOpenAddStudent] = useState(false);
  const [removeStudent, setRemoveStudent] = useState({
    open: false,
    name: null,
  });
  const [editStudent, setEditStudent] = useState({
    open: false,
    name: null,
  });
  function handleClick(action, name) {
    switch (action) {
      case "addStudent":
        setOpenAddStudent(true);
        break;
      case "removeStudent":
        setRemoveStudent({
          open: true,
          name: name,
        });
        break;
      case "editStudent":
        setEditStudent({
          open: true,
          name: name,
        });
        break;
    }
  }
  function handleClose() {
    if (openAddStudent) setOpenAddStudent(false);
    if (removeStudent.open) setRemoveStudent({ open: false, name: null });
    if (editStudent.open) setEditStudent({ open: false, name: null });
  }
  return (
    //  the main part of the page
    <div className="flex flex-col justify-center items-center h-max">
      {/* The list containing students' data */}
      <ul
        className="shadow-xl px-3 pb-2 pt-[70px] w-[min(500px,95vw)] h-max rounded-lg border-2 border-neutral-300
      flex flex-col gap-3 relative"
      >
        <h1
          key="title"
          className="flex items-center justify-end bg-blue text-white top-0 left-0 
        rounded-t-lg absolute w-[calc(100%+4px)] ml-[-2px] h-[55px] mt-[-2px] px-[5%]"
        >
          لیست دانش آموزان
        </h1>
        {students.map(({ id, name, pfp }) => {
          if (!name) return;
          return (
            <Student id={id} name={name} pfp={pfp} handleClick={handleClick} />
          );
        })}
        {/* add students */}
        <li className="flex flex-row justify-end items-center gap-6 pb-3 px-5">
          <span className="mr-auto flex flex-row items-center gap-2 hoverCircleAnimation">
            <FaPlus
              onClick={() => handleClick("addStudent")}
              className="text-neutral-400 transition-colors duration-200 cursor-pointer
            hover:text-neutral-500 relative"
            />
          </span>
          <i className="mt-[3px] w-[calc(100%-100px)] h-[15px] bg-neutral-300 rounded-3xl"></i>
          <img
            className="h-[40px] border-[2px] border-neutral-400 rounded-full"
            src={`/templateUser.svg`}
          />
        </li>
      </ul>
      {/* modals */}
      {openAddStudent && (
        <AddStudent handleClose={handleClose} setStudents={setStudents} />
      )}
      {removeStudent.open && (
        <RemoveStudent
          handleClose={handleClose}
          setStudents={setStudents}
          removeStudent={removeStudent}
        />
      )}
      {editStudent.open && (
        <EditStudent
          handleClose={handleClose}
          students={students}
          setStudents={setStudents}
          editStudent={editStudent}
        />
      )}
    </div>
  );
};
export default StudentsPanel;
