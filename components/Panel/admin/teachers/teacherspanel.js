import Teacher from "@/components/Panel/admin/teachers/teacher";
import AddTeacher from "@/components/Panel/admin/teachers/addteacher";
import RemoveTeacher from "@/components/Panel/admin/teachers/removeteacher";
import EditTeacher from "@/components/Panel/admin/teachers/editteacher";
import { FaPlus } from "react-icons/fa";
import { useState, useEffect } from "react";
const TeachersPanel = ({ Teachers }) => {
  const [teachers, setTeachers] = useState([]);
  const [openAddTeacher, setOpenAddTeacher] = useState(false);
  const [removeTeacher, setRemoveTeacher] = useState({
    open: false,
    id: null,
  });
  const [editTeacher, setEditTeacher] = useState({
    open: false,
    id: null,
  });
  useEffect(() => {
    setTeachers(Teachers);
  }, []);
  function handleClick(action, id) {
    switch (action) {
      case "addTeacher":
        setOpenAddTeacher(true);
        break;
      case "removeTeacher":
        setRemoveTeacher({
          open: true,
          id: id,
        });
        break;
      case "editTeacher":
        setEditTeacher({
          open: true,
          id: id,
        });
        break;
      default:
        return;
    }
  }
  function handleClose() {
    if (openAddTeacher) setOpenAddTeacher(false);
    if (removeTeacher.open) setRemoveTeacher({ open: false, id: null });
    if (editTeacher.open) setEditTeacher({ open: false, id: null });
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
        rounded-t-lg absolute w-[calc(100%+4px)] ml-[-2px] h-[55px] mt-[-2px] px-[8%]"
        >
          لیست دبیران
        </h1>
        {teachers.map(({ _id, name, pfp }) => {
          if (!name) return;
          return (
            <Teacher id={_id} name={name} pfp={pfp} handleClick={handleClick} />
          );
        })}
        {/* add students */}
        <li className="flex flex-row justify-end items-center gap-6 pb-3 px-5">
          <span className="mr-auto flex flex-row items-center gap-2 hoverCircleAnimation">
            <FaPlus
              onClick={() => handleClick("addTeacher")}
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
      {openAddTeacher && (
        <AddTeacher handleClose={handleClose} setTeachers={setTeachers} />
      )}
      {/* the variable "removeTeacher" contains the ID of the teacher we're going to be removing. */}
      {removeTeacher.open && (
        <RemoveTeacher
          handleClose={handleClose}
          setTeachers={setTeachers}
          removeTeacher={removeTeacher}
        />
      )}
      {/* the variable "editTeacher" contains the ID of the teacher we're going to be editing. */}
      {editTeacher.open && (
        <EditTeacher
          handleClose={handleClose}
          teachers={teachers}
          setTeachers={setTeachers}
          editTeacher={editTeacher}
        />
      )}
    </div>
  );
};
export default TeachersPanel;
