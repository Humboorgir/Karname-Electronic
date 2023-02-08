import Li from "./li";
import Account from "./account";
import { FaHome, FaInfoCircle, FaPhone } from "react-icons/fa";
const Header = () => {
  return (
    <header>
      <nav>
        <ul
          className="flex flex-row justify-between items-center px-[80px]
        list-none max-w-full top-0 h-[90px] rounded-xl border-[0.5px] border-gray-300 text-lg shadow-lg"
        >
          <div className="flex flex-row items-center justify-center gap-2 h-[55px] w-[130px]">
            <img className="h-[60px]" src="/logo.svg"></img>
            <span className="bg-gradient-to-b bg-clip-text text-transparent from-[#006eff] to-[#4ca6ff]">
              الکترونیک
            </span>{" "}
            کارنامه
          </div>
          <div className="flex flex-row justify-center items-center basis-2/4">
            <Li>
              خانه
              <FaHome className="mb-[2px]" />
            </Li>
            <Li>
              پشتیبانی
              <FaPhone className="mb-[0px] rotate-[-15deg]" />
            </Li>
            <Li>
              راهنما
              <FaInfoCircle className="mb-[2px]" />
            </Li>
          </div>
          <Account>حساب کاربری</Account>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
