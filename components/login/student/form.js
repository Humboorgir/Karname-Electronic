const Form = () => {
  return (
    <div className="pt-[5vh] h-[60vh] flex flex-col justify-start items-center w-full">
      <form
        action="/api/register"
        method="POST"
        className="flex flex-col gap-8 border-[1px] border-gray-400 rounded-lg p-10
        shadow-md w-[350px] relative"
      >
        <img
          src="/waves.svg"
          className="top-0 left-0 absolute rounded-lg"
        ></img>
        <div className="flex flex-row items-center justify-center gap-2">
          <h1 className="bold text-white text-xl z-10">ورود دانش آموز</h1>
          <img src="/logo.svg" className="h-[50px] z-10"></img>
        </div>
        <div className="flex flex-col inputAnimationField">
          <label className="text-lg z-10 mb-[5px]">کد ملی</label>
          <input
            type="text"
            placeholder="کد ملی"
            className="border-b-[1px] border-gray-500 px-3 py-2 focus:outline-none z-10"
          />
          <i className="relative" />
        </div>
        <div className="flex flex-col inputAnimationField">
          <label className="text-lg z-10 mb-[5px]">رمز عبور</label>
          <input
            type="text"
            placeholder="رمز عبور"
            className="border-b-[1px] border-gray-500 px-3 py-2 focus:outline-none z-10"
          />
          <i className="relative" />
        </div>
        <button
          type="submit"
          className="bg-blue rounded-3xl p-3 text-white z-10 clickAnimation"
        >
          ورود
        </button>
      </form>
    </div>
  );
};

export default Form;
