import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <na>
        <ul className="flex items-center justify-between md:px-[6rem] px-8 py-3">
          {/* defined at the end of the code */}
          <Logo />

          <li className="hidden md:inline">
            <Link href="/login/teacher" className="border-2 border-sky-600 rounded-lg p-3 text-sky-400">
              ورود به پنل کاربری
            </Link>
          </li>

          <div onClick={() => setOpen(!open)} className="md:hidden relative m-[20px] cursor-pointer">
            <FaBars className=" text-[35px]" />
            {open && (
              <div
                className="border-2 shadow-xl bg-white rounded-b-2xl
              flex flex-col items-center dropdownAnimation absolute top-[152%] right-[-18px] m w-max text-black z-20">
                <Link
                  className="border-b-2 w-full text-center p-4 hover:bg-neutral-100"
                  href="/login/teacher">
                  ورود معلم
                </Link>
                <Link
                  className="border-b-2 w-full text-center p-4 hover:bg-neutral-100"
                  href="/login/student">
                  ورود دانش آموز
                </Link>
                <Link className="border-b-2 w-full text-center p-4 hover:bg-neutral-100" href="/login/admin">
                  پنل ادمین
                </Link>
              </div>
            )}
          </div>
        </ul>
      </na>
    </header>
  );
};

function Logo() {
  return (
    <div className="flex flex-row items-center justify-center gap-2 h-[60px] w-[130px]">
      <img className="h-[50px]" src="/logo.svg"></img>
      <span className="bg-gradient-to-b bg-clip-text text-transparent from-[#006eff] to-[#4ca6ff]">
        الکترونیک
      </span>{" "}
      کارنامه
    </div>
  );
}
export default Header;
