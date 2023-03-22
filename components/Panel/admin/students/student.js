import { FaTrash, FaEdit } from "react-icons/fa";
const Student = ({ id, name, pfp, handleClick }) => {
  return (
    <li
      key={id}
      className="flex flex-row justify-end items-center gap-3 border-b-2 border-neutral-300
  pb-3 px-5"
    >
      <span className="mr-auto flex flex-row items-center gap-2">
        <span className="relative">
          <FaEdit
            onClick={() => handleClick("editStudent", name)}
            className="text-gray-800 mb-[2px] cursor-pointer"
          />
        </span>
        <span className>
          <FaTrash
            onClick={() => handleClick("removeStudent", name)}
            className="text-gray-800 relative cursor-pointer"
          />
        </span>
      </span>
      <span>{name}</span>
      <img className="h-[40px]" src={`/defaultUser${pfp}.svg`} />
    </li>
  );
};

export default Student;
