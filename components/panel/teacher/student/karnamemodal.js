import MarkInput from "@/components/panel/teacher/student/markinput";
import { useRef } from "react";

const Modal = ({ setReports }) => {
  const modalRef = useRef(null);
  return (
    <dialog id="karnameModal" className="modal" ref={modalRef}>
      <form
        onSubmit={(e) => handleSubmit(e, setReports, modalRef)}
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
          <MarkInput text="فناوری" id="fanavari" />
          <MarkInput text="دفاعی" id="defai" />
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

async function handleSubmit(e, setReports, modalRef) {
  e.preventDefault();
  const data = {
    name: e.target.name.value,
    riazi: Number(e.target.riazi.value),
    oloom: Number(e.target.oloom.value),
    farsi: Number(e.target.farsi.value),
    ejtemai: Number(e.target.ejtemai.value),
    dini: Number(e.target.dini.value),
    zaban: Number(e.target.zaban.value),
    arabi: Number(e.target.arabi.value),
    varzesh: Number(e.target.varzesh.value),
    honar: Number(e.target.honar.value),
    fanavari: Number(e.target.fanavari.value),
    defai: Number(e.target.defai.value),
    enzebat: Number(e.target.enzebat.value),
  };
  console.log(data);

  let response = await fetch(`${window.location.origin}/api/student/${global.student.id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.status == "200")
    return console.log("Something went wrong! server responded with code " + response.status);

  response = await response.json();

  setReports((reports) => {
    console.log(response);
    return [{ ...response.data }, ...reports];
  });

  return modalRef.current.close();
}

export default Modal;
