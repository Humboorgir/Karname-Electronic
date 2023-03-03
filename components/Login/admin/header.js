import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "@mui/material/Button";
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <na>
        <ul className="border-b-2 list-none flex items-center justify-end md:block">
          <div className="md:hidden flex flex-row items-center justify-center gap-2 h-[60px] w-[130px] mr-auto ml-[10vw]">
            <img className="h-[50px]" src="/logo.svg"></img>
            <span className="bg-gradient-to-b bg-clip-text text-transparent from-[#006eff] to-[#4ca6ff]">
              الکترونیک
            </span>{" "}
            کارنامه
          </div>
          <div className="hidden md:flex flex-row justify-between px-[5vw] md:px-[10vw] pt-8 pb-8 items-center">
            <li>
              <Link
                className="bg-red-500 rounded-[20px] px-4 py-3 text-white"
                href="/login/admin"
              >
                بازگشت به خانه
              </Link>
            </li>
            <div className="flex gap-5">
              <li>
                <Link
                  href="/login/student"
                  // border-[1px] border-black
                  className="bg-blue text-white rounded-[20px] px-4 py-3"
                >
                  ورود دانش آموز
                </Link>
              </li>
              <li>
                <Link
                  href="/login/teacher"
                  className="bg-blue text-white rounded-[20px] px-4 py-3"
                >
                  ورود معلم
                </Link>
              </li>
            </div>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="md:hidden relative m-[20px] cursor-pointer"
          >
            <FaBars className=" text-[35px]" />
            {open && (
              <div
                className="border-2 shadow-xl bg-white rounded-b-2xl
              flex flex-col items-center dropdownAnimation absolute top-[152%] right-[-18px] m w-max text-black z-20 "
              >
                <Link
                  className="border-b-2 w-full text-center p-4 hover:bg-neutral-100"
                  href="/"
                >
                  بازگشت به خانه
                </Link>
                <Link
                  className="border-b-2 w-full text-center p-4 hover:bg-neutral-100"
                  href="/login/teacher"
                >
                  ورود معلم
                </Link>
                <Link
                  className="border-b-2 w-full text-center p-4 hover:bg-neutral-100"
                  href="/login/student"
                >
                  ورود دانش آموز
                </Link>
              </div>
            )}
          </div>
        </ul>
      </na>
    </header>
  );
};

export default Header;
