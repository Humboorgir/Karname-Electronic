const Li = ({ children, href }) => {
  return (
    <li>
      <a
        className="flex flex-row items-center justify-center gap-2 cursor-pointer
     h-[90px] w-[130px] tabHoverAnimation"
        href={href}
      >
        {children}
      </a>
    </li>
  );
};

export default Li;
