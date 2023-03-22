import DropdownMenu from "./dropdown";
import { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
const Account = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    window.onclick = (e) => {
      if (e.target.matches(".account")) return;
      setOpen(false);
    };
  }, []);
  return (
    <div
      onClick={() => setOpen(!open)}
      className="h-[90px] w-[230px] flex flex-row justify-center items-center gap-3 
      cursor-pointer tabHoverAnimation account absolute md:static right-[4%]"
      id="account"
    >
      <div className="flex flex-col items-end account gap-1">
        <span className="account leading-5">Admin</span>
        <p className="text-red-500 text-[14px] account leading-3">نماینده</p>
      </div>
      <img className="h-[60px] account" src="/defaultUser1.svg"></img>
      <FaAngleDown className="h-[20px]" />
      {open && <DropdownMenu />}
    </div>
  );
};

export default Account;
