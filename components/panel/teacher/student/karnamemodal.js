import MarkInput from "@/components/panel/teacher/student/markinput";
import { useRef } from "react";

const Modal = ({ handleSubmit }) => {
  const modalRef = useRef(null);
  return (
    <dialog id="karnameModal" className="modal" ref={modalRef}>
      <form
        onSubmit={(e) => handleSubmit(e, setStudents, modalRef)}
        onClick={(e) => e.stopPropagation()}
        method="dialog"
        className="modal-box w-[min(370px,95vw)]">
        <div className="flex justify-end items-center gap-3 mb-8">
          <input
            className="py-1 px-2 w-[min(200px,40vw)] focus:outline-none border-b-2 border-b-neutral-400"
            name="name"
            placeholder="کارنامه دی ماه"
            id="name"></input>
          <label className="text-xl font-bold" for="name">
            عنوان کارنامه
          </label>
        </div>
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-5 ">
          <MarkInput text="ریاضی" id="riazi" />
          <MarkInput text="علوم" id="oloom" />
          <MarkInput text="فارسی" id="farsi" />
          <MarkInput text="اجتماعی" id="ejtemai" />
          <MarkInput text="دینی" id="dini" />
          <MarkInput text="زبان" id="zaban" />
          <MarkInput text="عربی" id="arabi" />
          <MarkInput text="ورزش" id="varzesh" />
          <MarkInput text="هنر" id="honar" />
          <MarkInput text="انضباط" id="enzebat" />
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

export default Modal;