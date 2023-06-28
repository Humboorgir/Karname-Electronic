import { useRef } from "react";

const AddModal = ({ setTeachers }) => {
  const modalRef = useRef(null);

  const image = String(Math.floor(Math.random() * 5) + 1);
  return (
    <dialog id="addModal" className="modal" ref={modalRef}>
      <form
        onSubmit={(e) => handleSubmit(e, setTeachers, modalRef)}
        onClick={(e) => e.stopPropagation()}
        method="dialog"
        className="modal-box flex flex-col w-[min(350px,98vw)]"
      >
        <h3 className="text-lg mb-3 text-right mr-2">ثبت دبیر جدید</h3>
        <input
          type="text"
          placeholder="نام و نام خانوادگی"
          name="name"
          className="input border border-neutral-400 w-full max-w-xs placeholder:text-right mb-4"
          required
        />
        <input
          type="text"
          placeholder="کد ملی"
          name="username"
          className="input border border-neutral-400 w-full max-w-xs placeholder:text-right"
          required
        />

        <div className="modal-action">
          <button
            type="submit"
            className="btn bg-blue text-white hover:bg-sky-400"
          >
            ثبت دبیر
          </button>

          <button
            onClick={(e) => {
              e.preventDefault();
              modalRef.current.close();
            }}
            className="btn btn-outline btn-error hover:!text-white text-white"
          >
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

async function handleSubmit(e, setTeachers, modalRef) {
  e.preventDefault();
  const image = Math.floor(Math.random() * 5) + 1;
  const data = {
    username: e.target.username.value,
    name: e.target.name.value,
    image,
  };
  const response = await fetch("/api/teachers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.status !== 200) {
    document.querySelector("body").classList.add("shake");
    setTimeout(() => {
      document.querySelector("body").classList.remove("shake");
    }, 500);
    return;
  }

  const res = await response.json();

  modalRef.current.close();

  setTeachers((teachers) => [...teachers, res]);
}

export default AddModal;
