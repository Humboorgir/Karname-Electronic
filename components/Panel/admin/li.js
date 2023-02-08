const Li = ({ children }) => {
  return (
    <li
      className="flex flex-row items-center justify-center gap-2
     h-[55px] w-[130px] hover:border-b-[2px] hover:border-b-neutral-800"
    >
      {children}
    </li>
  );
};

export default Li;
