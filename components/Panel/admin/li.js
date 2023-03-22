import Link from "next/link";
const Li = ({ children, href }) => {
  return (
    <li>
      <Link
        className="flex flex-row items-center justify-center gap-2 cursor-pointer
     h-[90px] w-[130px] tabHoverAnimation"
        href={href}
      >
        {children}
      </Link>
    </li>
  );
};

export default Li;
