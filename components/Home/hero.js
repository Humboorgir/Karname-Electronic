const Hero = () => {
  return (
    <div className="mt-[19vh] flex flex-col justify-center items-center text-center">
      <div className="flex flex-row justify-center items-center">
        <span className="text-[80px]">
          کارنامه
          <span className="bg-gradient-to-b bg-clip-text text-transparent from-[#006eff] to-[#4ca6ff]">
            {" "}
            الکترونیک
          </span>
        </span>
      </div>
      <p className="text-gray-900 w-[33vw]">
        کارنامه الکترونیک با هدف کاهش نیاز به نیروی انسانی و مصرف کاغذ اجازه
        دریافت کارنامه از طریق پست الکترونیک را به دانش آموز می دهد
      </p>
    </div>
  );
};

export default Hero;
