import { FaSignOutAlt, FaCog } from "react-icons/fa";
const dropdownMenu = ({ handleSignOut }) => {
  return (
    <div className="absolute w-[230px] h-max shadow-xl rounded-b-2xl top-[90px] bg-white z-10">
      <ul className="flex flex-col">
        <li className="h-[50px] flex flex-row items-center justify-end px-10 gap-2 hover:bg-neutral-100">
          تغییر رمز عبور
          <FaCog className="mb-[2px]" />
        </li>
        <i className="border-b-2 border-neutral-200" />
        <li
          onClick={handleSignOut}
          className="h-[50px] flex flex-row items-center justify-end px-10 gap-2 hover:bg-neutral-100 hover:rounded-b-2xl"
        >
          خروج
          <FaSignOutAlt className="mb-[2px]" />
        </li>
      </ul>
    </div>
  );
};

export default dropdownMenu;