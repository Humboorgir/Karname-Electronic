import { useRef } from "react";

const EditModal = ({ setManagers, managerId }) => {
  const modalRef = useRef(null);

  return (
    <dialog id="editModal" className="modal" ref={modalRef}>
      <form
        onSubmit={(e) => handleSubmit(e, setManagers, managerId, modalRef)}
        onClick={(e) => e.stopPropagation()}
        method="dialog"
        className="modal-box flex flex-col w-[min(350px,98vw)]">
        <h3 className="text-lg mb-3 text-right ml-2">ویرایش اطلاعات نماینده</h3>

        <input
          type="text"
          placeholder="نام و نام خانوادگی"
          name="name"
          className="input border border-neutral-400 w-full max-w-xs mb-4 placeholder:text-right"
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
          <button type="submit" className="btn bg-blue text-white hover:bg-sky-400">
            ویرایش اطلاعات
          </button>
          {/* if there is a button in form, it will close the modal */}
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

async function handleSubmit(e, setManagers, managerId, modalRef) {
  e.preventDefault();
  const data = {
    username: e.target.username.value,
    name: e.target.name.value,
    id: managerId,
  };
  const response = await fetch("/api/managers", {
    method: "PUT",
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

  modalRef.current.close();
  setManagers((managers) => {
    const updatedStudents = managers.map((manager) => {
      if (manager.id === managerId) {
        return { ...manager, name: data.name };
      } else {
        return manager;
      }
    });
    return updatedStudents;
  });
}

export default EditModal;
