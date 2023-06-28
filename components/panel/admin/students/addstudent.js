import { FaPlus } from "react-icons/fa";
const AddStudent = ({ openModal }) => {
  return (
    <li
      key="addstudent"
      className="flex flex-row justify-end items-center gap-6 pb-3 px-5"
    >
      <span className="mr-auto flex flex-row items-center gap-2 hoverCircleAnimation">
        <FaPlus
          onClick={() => openModal("add")}
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
  );
};

export default AddStudent;
