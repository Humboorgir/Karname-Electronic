import { useRef } from "react";

const ChangePassModal = () => {
  const modalRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("test");
  }
  return (
    <dialog id="changePassModal" className="modal" ref={modalRef}>
      <form
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
        method="dialog"
        className="modal-box w-[min(320px,95vw)]">
        <div className="flex flex-col inputAnimationField mb-6">
          <label htmlFor="password" className="text-lg z-10 mb-[5px]">
            رمز عبور قبلی
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="رمز عبور قبلی"
            className="border-b border-gray-500 px-2 py-2 focus:outline-none z-10"
          />
          <i className="relative" />
        </div>
        <div className="flex flex-col inputAnimationField">
          <label htmlFor="password" className="text-lg z-10 mb-[5px]">
            رمز عبور جدید
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="رمز عبور جدید"
            className="border-b border-gray-500 px-2 py-2 focus:outline-none z-10"
          />
          <i className="relative" />
        </div>

        <div className="modal-action justify-center md:justify-end">
          <button type="submit" className="btn bg-blue text-white hover:bg-sky-400">
            تغییر رمز عبور
          </button>

          <button
            type="button"
            onClick={() => modalRef.current.close()}
            className="btn btn-outline btn-error hover:!text-white text-white">
            انصراف
          </button>
        </div>
      </form>

      {/* backdrop */}
      <form method="dialog" className="modal-backdrop">
        <button className="cursor-default"></button>
      </form>
    </dialog>
  );
};

export default ChangePassModal;
