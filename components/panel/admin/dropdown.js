import { FaSignOutAlt, FaCog } from "react-icons/fa";
const dropdownMenu = ({ handleSignOut }) => {
  return (
    <ul
      tabIndex={0}
      className="dropdown-content menu shadow-xl rounded-b-2xl z-[1] w-[230px] top-[90px] bg-white"
    >
      <li>
        <a>
          <FaCog className="mb-[2px]" /> Change your password
        </a>
      </li>
      <li onClick={handleSignOut}>
        <a>
          <FaSignOutAlt className="mb-[2px]" /> Log out
        </a>
      </li>
    </ul>
  );
};

export default dropdownMenu;
