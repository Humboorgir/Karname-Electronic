import Link from "next/link";
const Header = () => {
  return (
    <header>
      <nav>
        <ul className="list-none flex flex-row justify-between px-32 pt-8 pb-8 items-center">
          <li>
            <Link
              className="bg-red-500 rounded-[20px] px-4 py-3 text-white"
              href="/login/admin"
            >
              پنل ادمین
            </Link>
          </li>
          <div className="flex gap-5">
            <li>
              <Link
                href="/"
                className="bg-blue text-white rounded-[20px] px-4 py-3"
              >
                بازگشت به خانه
              </Link>
            </li>
            <li>
              <Link
                href="/login/teacher"
                className="bg-blue text-white rounded-[20px] px-4 py-3"
              >
                ورود معلم
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
