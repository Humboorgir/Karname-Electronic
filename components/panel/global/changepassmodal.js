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
        className="modal-box w-[min(370px,95vw)]">
        <div className="flex justify-end items-center gap-3 mb-8">
          <input
            className="py-1 px-2 w-[min(200px,40vw)] focus:outline-none border-b-2 border-b-neutral-400"
            name="name"
            placeholder="کارنامه دی ماه"
            id="name"
            required></input>
          <label className="text-xl font-bold" htmlFor="name">
            عنوان کارنامه
          </label>
        </div>

        <div className="modal-action justify-center md:justify-end">
          <button type="submit" className="btn bg-blue text-white hover:bg-sky-400">
            ثبت کارنامه
          </button>

          <button
            onClick={(e) => {
              e.preventDefault();
              modalRef.current.close();
            }}
            className="btn btn-outline btn-error hover:!text-white text-white">
            انصراف
          </button>
        </div>
      </form>

      {/* backdrop */}
      <form method="dialog" className="modal-backdrop">
        <button></button>
      </form>
    </dialog>
  );
};

export default ChangePassModal;
