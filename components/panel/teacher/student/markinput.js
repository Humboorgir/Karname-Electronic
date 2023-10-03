const MarkInput = ({ text, id }) => {
  return (
    <div className="flex items-center justify-start gap-2 md:gap-4 w-36">
      <input
        className="p-2 px-4 max-w-[4rem] rounded-md focus:outline-none border border-neutral-400"
        name={id}
        placeholder="۲۰"
        id={id}
        autoComplete="off"
        required></input>
      <label className="text-lg font-bold" htmlFor={id}>
        {text}
      </label>
    </div>
  );
};

export default MarkInput;
