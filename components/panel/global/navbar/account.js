import { useSession } from "next-auth/react";

import DropdownMenu from "@/components/panel/global/navbar/dropdown";
import { FaAngleDown } from "react-icons/fa";

const Account = ({ handleSignOut }) => {
  const { data: session, status } = useSession();

  const positions = {
    admin: "نماینده",
    teacher: "دبیر",
    student: "دانش آموز",
  };
  const position = positions[session.user.position];

  const profilePictureUrl =
    session.user.position == "student"
      ? `/defaultStudent${session.user.image}.svg`
      : `/defaultTeacher${session.user.image}.svg`;
  if (status !== "authenticated") return <div>NOT LOGGED IN</div>;
  return (
    <div
      tabIndex={0}
      className="h-[90px] min-w-[230px] max-w-[270px] px-3 flex flex-row justify-center items-center gap-3 
      cursor-pointer account relative hover:bg-[rgba(197,197,197,0.25)] dropdown"
      id="account">
      <div className="flex flex-col items-end justify-center account gap-1.5">
        <span className="account leading-5">{session.user.name}</span>
        <p className="text-sky-600 text-sm account">{position}</p>
      </div>
      <img className="h-[60px] account" src={profilePictureUrl}></img>
      <FaAngleDown className="h-[20px]" />
      <DropdownMenu handleSignOut={handleSignOut} />
    </div>
  );
};

export default Account;
