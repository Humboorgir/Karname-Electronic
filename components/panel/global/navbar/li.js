import Link from "next/link";
const Li = ({ children, href, disabled }) => {
  return (
    <li>
      {disabled ? (
        <button
          className="flex flex-row items-center justify-center gap-2 cursor-pointer
         h-[90px] w-[130px] hover:cursor-not-allowed hover:bg-[#c5c5c53f] hover:transition-colors"
          href={href}
          disabled={disabled}
        >
          {children}
        </button>
      ) : (
        <Link
          className="flex flex-row items-center justify-center gap-2 cursor-pointer
          h-[90px] w-[130px] hover:bg-[#c5c5c53f] hover:transition-colors"
          href={href}
        >
          {children}
        </Link>
      )}
    </li>
  );
};

export default Li;
