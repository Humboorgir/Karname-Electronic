import { FaSignOutAlt, FaCog } from "react-icons/fa";
const Li = ({ children }) => {
  return (
    <li className="h-[50px] flex flex-row items-center justify-end px-10 gap-2 hover:bg-neutral-100">
      {children}
    </li>
  );
};
const dropdownMenu = () => {
  return (
    <div className="absolute w-[200px] h-max rounded-b-2xl shadow-xl top-[90px] bg-white">
      <ul className="flex flex-col">
        <Li>
          تنظیمات
          <FaCog className="mb-[2px]" />
        </Li>
        <i className="border-b-2 border-neutral-200" />
        <Li>
          خروج
          <FaSignOutAlt className="mb-[2px]" />
        </Li>
      </ul>
    </div>
  );
};

export default dropdownMenu;
