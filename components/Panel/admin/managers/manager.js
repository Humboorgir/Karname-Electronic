import { FaTrash, FaEdit } from "react-icons/fa";
const Manager = ({ id, name, image, handleClick }) => {
  return (
    <li
      key={id}
      className="flex flex-row justify-end items-center gap-3 border-b-2 border-neutral-300
  pb-3 px-5"
    >
      <span className="mr-auto flex flex-row items-center gap-2">
        <span className="relative">
          <FaEdit
            onClick={() => handleClick("editManager", id)}
            className="text-gray-800 mb-[2px] cursor-pointer"
          />
        </span>
        <span className>
          <FaTrash
            onClick={() => handleClick("removeManager", id)}
            className="text-gray-800 relative cursor-pointer"
          />
        </span>
      </span>
      <span>{name}</span>
      <img className="h-[40px]" src={`/defaultTeacher${image}.svg`} />
    </li>
  );
};

export default Manager;
