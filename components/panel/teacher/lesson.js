const Lesson = ({ title }) => {
  return (
    <button
      className="bg-gradient-to-br from-sky-600 to-sky-400 text-white 
    text-2xl bold rounded-md grid place-items-center w-28 h-24 hover:cursor-pointer
    scale-100 hover:scale-110 active:scale-95 transition-all duration-[400ms]">
      {title}
    </button>
  );
};

export default Lesson;
