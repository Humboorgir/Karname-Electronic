import DropdownMenu from "./dropdown";
import { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
const Account = ({ handleSignOut }) => {
  return (
    <div
      tabIndex={0}
      className="h-[90px] w-[230px] flex flex-row justify-center items-center gap-2 
      cursor-pointer account relative hover:bg-[rgba(197,197,197,0.25)] dropdown"
      id="account"
    >
      <div className="flex flex-col items-end justify-center account gap-1">
        <span className="account leading-5">Manager</span>
        <p className="text-red-500 text-sm account">Manager</p>
      </div>
      <img className="h-[60px] account" src="/defaultTeacher1.svg"></img>
      <FaAngleDown className="h-[20px]" />
      <DropdownMenu handleSignOut={handleSignOut} />
    </div>
  );
};

export default Account;
