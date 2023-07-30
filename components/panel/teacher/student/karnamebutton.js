import Image from "next/image";

const KarnameButton = ({ student }) => {
  if (!student.marks?.length)
    return (
      <button className="flex items-center gap-2 bg-blue p-3 rounded-lg text-white mt-2.5">
        <Image src="/logo.svg" height={20} width={20} alt="کارنامه" />
        ثبت اولین کارنامه
      </button>
    );

  return (
    <button className="flex items-center gap-2 bg-blue p-3 rounded-lg text-white mt-2.5">
      <Image src="/logo.svg" height={20} width={20} alt="کارنامه" />
      ایجاد کارنامه جدید
    </button>
  );
};

export default KarnameButton;
