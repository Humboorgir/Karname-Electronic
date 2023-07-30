import Image from "next/image";

const KarnameButton = () => {
  return (
    <button className="flex items-center gap-2 bg-blue p-3 rounded-lg text-white mt-2.5 absolute">
      <Image src="/logo.svg" height={20} width={20} alt="کارنامه" />
      ایجاد کارنامه جدید
    </button>
  );
};

export default KarnameButton;
