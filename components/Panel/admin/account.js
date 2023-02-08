import DropdownMenu from "./dropdown";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
const Account = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => setOpen(!open)}
      className="h-[90px] w-[230px] flex flex-row justify-center items-center gap-3 
      relative cursor-pointer userHoverAnimation"
    >
      <div className="flex flex-col items-end">
        <span>ایلیا فضل اللهی</span>
        <p className="text-red-500 text-[16px]">نماینده</p>
      </div>
      <img className="h-[60px]" src="/defaultUser.svg"></img>
      <FaAngleDown className="h-[20px]" />
      {open && <DropdownMenu />}
    </div>
  );
};

export default Account;
