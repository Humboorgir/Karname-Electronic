import Li from "./li";
import Account from "./account";
import { FaHome, FaInfoCircle, FaPhone } from "react-icons/fa";
import { signOut } from "next-auth/react";
const Header = () => {
  function handleSignOut() {
    signOut({ callbackUrl: `${window.location.origin}/` });
  }
  return (
    <header>
      <nav>
        <ul
          className="hidden md:flex flex-row justify-between items-center px-[80px]
        list-none max-w-full top-0 h-[90px] rounded-xl border-[0.5px] border-gray-300 text-lg shadow-lg relative">
          <div className="flex flex-row items-center justify-center gap-2 h-[55px] w-[130px]">
            <img className="h-[60px]" src="/logo.svg"></img>
            <span className="bg-gradient-to-b bg-clip-text text-transparent from-[#006eff] to-[#4ca6ff]">
              الکترونیک
            </span>{" "}
            کارنامه
          </div>
          <div className="hidden lg:flex flex-row justify-center items-center absolute left-[50%] translate-x-[-50%]">
            <Li href="/panel/student">
              <FaHome className="mb-[3px]" />
              خانه
            </Li>
            <Li href="/support" disabled={true}>
              <FaPhone className="mb-[0px] rotate-[110deg]" />
              پشتیبانی
            </Li>
            <Li href="/guide" disabled={true}>
              <FaInfoCircle className="mb-[2px]" />
              راهنما
            </Li>
          </div>
          <Account handleSignOut={handleSignOut} />
        </ul>

        <ul
          className="md:hidden flex flex-row justify-between  items-center px-[20px] list-none max-w-full top-0 h-[90px]
        rounded-xl border-[0.5px] border-gray-300 text-lg shadow-lg">
          <img src="/logo.svg" className="h-[60px] cursor-pointer" />
          {/* lost my braincells with this one, spent 30 minutes trying to figure out why handleSignOut is 
          undefined just to realize I was only passing it down as a prop for the desktop version */}
          <Account handleSignOut={handleSignOut} />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
