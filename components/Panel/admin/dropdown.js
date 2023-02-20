import { FaSignOutAlt, FaCog } from "react-icons/fa";
const dropdownMenu = () => {
  return (
    <div className="absolute w-[200px] h-max shadow-xl rounded-b-2xl top-[90px] bg-white">
      <ul className="flex flex-col">
        <li className="h-[50px] flex flex-row items-center justify-end px-10 gap-2 hover:bg-neutral-100">
          تنظیمات
          <FaCog className="mb-[2px]" />
        </li>
        <i className="border-b-2 border-neutral-200" />
        <li className="h-[50px] flex flex-row items-center justify-end px-10 gap-2 hover:bg-neutral-100 hover:rounded-b-2xl">
          خروج
          <FaSignOutAlt className="mb-[2px]" />
        </li>
      </ul>
    </div>
  );
};

export default dropdownMenu;
