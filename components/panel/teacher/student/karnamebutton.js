import Image from "next/image";

const KarnameButton = ({ handleClick, student }) => {
  if (!student.reports?.length)
    return (
      <button
        onClick={handleClick}
        className="focus:outline-transparent flex items-center gap-2 bg-blue p-3 rounded-lg text-white mt-3">
        <Image src="/logo.svg" height={20} width={20} alt="کارنامه" />
        ثبت اولین کارنامه
      </button>
    );

  return (
    <button
      onClick={handleClick}
      className="focus:outline-transparent flex items-center gap-2 bg-blue p-3 rounded-lg text-white mt-3">
      <Image src="/logo.svg" height={20} width={20} alt="کارنامه" />
      ثبت کارنامه جدید
    </button>
  );
};

export default KarnameButton;
