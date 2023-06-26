import Manager from "@/components/panel/admin/managers/manager";
import AddManager from "@/components/panel/admin/managers/addmanager";
import RemoveManager from "@/components/panel/admin/managers/removemanager";
import EditManager from "@/components/panel/admin/managers/editmanager";
import { FaPlus } from "react-icons/fa";
import { useState, useEffect } from "react";
const ManagersPanel = ({ Managers }) => {
  const [managers, setManagers] = useState([]);
  const [openAddManager, setOpenAddManager] = useState(false);
  const [removeManager, setRemoveManager] = useState({
    open: false,
    id: null,
  });
  const [editManager, setEditManager] = useState({
    open: false,
    id: null,
  });
  useEffect(() => {
    setManagers(Managers);
  }, []);
  function handleClick(action, id) {
    switch (action) {
      case "addManager":
        setOpenAddManager(true);
        break;
      case "removeManager":
        setRemoveManager({
          open: true,
          id: id,
        });
        break;
      case "editManager":
        setEditManager({
          open: true,
          id: id,
        });
        break;
      default:
        return;
    }
  }
  function handleClose() {
    if (openAddManager) setOpenAddManager(false);
    if (removeManager.open) setRemoveManager({ open: false, id: null });
    if (editManager.open) setEditManager({ open: false, id: null });
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
          className="flex items-center justify-end bg-red-500 text-white top-0 left-0 
        rounded-t-lg absolute w-[calc(100%+4px)] ml-[-2px] h-[55px] mt-[-2px] px-[8%]"
        >
          لیست نمایندگان
        </h1>
        {managers.map(({ _id, name, image }) => {
          if (!name) return;
          return (
            <Manager
              id={_id}
              name={name}
              image={image}
              handleClick={handleClick}
            />
          );
        })}
        {/* add managers */}
        <li className="flex flex-row justify-end items-center gap-6 pb-3 px-5">
          <span className="mr-auto flex flex-row items-center gap-2 hoverCircleAnimation">
            <FaPlus
              onClick={() => handleClick("addManager")}
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
      {openAddManager && (
        <AddManager handleClose={handleClose} setManagers={setManagers} />
      )}
      {/* the variable "removeManager" contains the ID of the manager we're going to be removing. */}
      {removeManager.open && (
        <RemoveManager
          handleClose={handleClose}
          setManagers={setManagers}
          removeManager={removeManager}
        />
      )}
      {/* the variable "editManager" contains the ID of the manager we're going to be editing. */}
      {editManager.open && (
        <EditManager
          handleClose={handleClose}
          managers={managers}
          setManagers={setManagers}
          editManager={editManager}
        />
      )}
    </div>
  );
};
export default ManagersPanel;
