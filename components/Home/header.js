const Header = () => {
  return (
    <header>
      <nav>
        <ul
          className="list-none flex flex-row justify-between px-32 pt-8 pb-8 
        border-b-[3px] items-center"
        >
          <li>
            <a
              className="bg-red-500 rounded-[20px] px-4 py-3 text-white"
              href="/admin"
            >
              پنل ادمین
            </a>
          </li>
          <div className="flex gap-5">
            <li>
              <a
                href="/login/student"
                className="border-[1px] border-black rounded-[20px] px-4 py-3"
              >
                ورود دانش آموز
              </a>
            </li>
            <li>
              <a
                href="/login/teacher"
                className="border-[1px] border-black rounded-[20px] px-4 py-3"
              >
                ورود معلم
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
