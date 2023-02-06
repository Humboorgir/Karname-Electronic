const Li = ({ children }) => {
  return (
    <li
      className="flex flex-row items-center justify-center gap-2 text-white bg-slate-700
     h-[90px] w-[130px] rounded-md"
    >
      {children}
    </li>
  );
};

export default Li;
