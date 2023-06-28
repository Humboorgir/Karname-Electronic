import { useSession } from "next-auth/react";

import DropdownMenu from "./dropdown";
import { FaAngleDown } from "react-icons/fa";

const Account = ({ handleSignOut }) => {
  const roles = {
    manager: "نماینده",
    teacher: "دبیر",
    student: "دانش آموز",
  };

  const { data: session, status } = useSession();
  if (status !== "authenticated") return <div>NOT LOGGED IN</div>;
  return (
    <div
      tabIndex={0}
      className="h-[90px] w-[230px] flex flex-row justify-center items-center gap-3 
      cursor-pointer account relative hover:bg-[rgba(197,197,197,0.25)] dropdown"
      id="account"
    >
      <div className="flex flex-col items-end justify-center account gap-1">
        <span className="account leading-5">{session.user.name}</span>
        <p className="text-red-500 text-sm account">
          {roles[session.user.role]}
        </p>
      </div>
      <img className="h-[60px] account" src="/defaultTeacher1.svg"></img>
      <FaAngleDown className="h-[20px]" />
      <DropdownMenu handleSignOut={handleSignOut} />
    </div>
  );
};

export default Account;
