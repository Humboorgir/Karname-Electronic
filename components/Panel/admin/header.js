import Li from "./li";
import { FaHome } from "react-icons/fa";
const Header = () => {
  return (
    <header>
      <nav>
        <ul
          className="flex flex-row justify-around
        list-none w-full top-0 h-[90px] bg-slate-800 text-lg"
        >
          <Li>
            خانه
            <FaHome className="text-center text-[25px]" />
          </Li>
          <Li>
            خانه
            <FaHome className="text-center text-[25px]" />
          </Li>
          <Li>
            خانه
            <FaHome className="text-center text-[25px]" />
          </Li>
          <Li>
            خانه
            <FaHome className="text-center text-[25px]" />
          </Li>
          <Li>حساب کاربری</Li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
