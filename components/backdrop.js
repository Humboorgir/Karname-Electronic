const Backdrop = ({ children, handleClose }) => {
  return (
    <div
      className="flex items-center justify-center h-full w-full top-0 left-0 bg-[#00000071] absolute animate-fade"
      onClick={handleClose}
    >
      {children}
    </div>
  );
};

export default Backdrop;
