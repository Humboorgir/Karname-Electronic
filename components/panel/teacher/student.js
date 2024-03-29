import { FaEdit } from "react-icons/fa";
import Link from "next/link";

const Student = ({ id, name, image }) => {
  return (
    <li
      className="flex flex-row justify-end items-center gap-3 border-b-2 border-neutral-300 last-of-type:border-b-0
  pb-3 px-5">
      <span className="mr-auto flex flex-row items-center gap-2">
        <Link className="relative" href={`/panel/teacher/student/${id}`}>
          <FaEdit className="text-gray-800 mb-[2px] cursor-pointer text-lg" />
        </Link>
      </span>
      <span>{name}</span>
      <img className="h-[40px]" src={`/defaultStudent${image}.svg`} />
    </li>
  );
};

export default Student;
