import { FaSignOutAlt, FaCog } from "react-icons/fa";
const dropdownMenu = ({ handleSignOut }) => {
  return (
    <ul
      tabIndex={0}
      className="dropdown-content menu shadow-xl rounded-b-2xl z-[1] w-[230px] top-[90px] bg-white"
    >
      <li>
        <a className="text-base">
          <FaCog className="mb-[2px]" />
          تغییر رمز عبور
        </a>
      </li>
      <li onClick={handleSignOut}>
        <a className="text-base">
          <FaSignOutAlt className="mb-[2px]" /> خروج
        </a>
      </li>
    </ul>
  );
};

export default dropdownMenu;
