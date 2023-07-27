const Error = ({ error, setError }) => {
  if (error.title)
    return (
      <div
        className="fixed top-[5%] z-20 p-3 bg-red-200 text-red-700 self-center
        rounded-2xl shadow-md popIn"
      >
        <span className="bold">{error.title}</span> {error.text}
      </div>
    );
  return (
    <div className="fixed top-[5%] z-20 rounded-2xl p-3 bg-red-300 text-red-700 self-center">
      {error.text}
    </div>
  );
};

export default Error;
