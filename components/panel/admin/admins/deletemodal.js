import { useRef } from "react";

const DeleteModal = ({ setAdmins, adminId }) => {
  const modalRef = useRef(null);

  return (
    <dialog id="deleteModal" className="modal" ref={modalRef}>
      <form
        onSubmit={(e) => handleSubmit(e, setAdmins, adminId, modalRef)}
        onClick={(e) => e.stopPropagation()}
        method="dialog"
        className="modal-box flex flex-col w-[min(350px,98vw)]">
        <h3 className="bold text-xl text-right mr-4 ">آیا مطمئن هستید؟</h3>
        <p className="pt-3 px-3 text-right">
          با حذف یک نماینده از سیستم, تمام اطلاعات آنها برای همیشه از بین خواهد رفت
          <br /> این فرآیند قابل بازگشت نیست
        </p>

        <div className="modal-action mt-4">
          <button type="submit" className="btn bg-red-500 btn-error hover:!text-white text-white">
            تایید و حذف نماینده
          </button>
          {/* if there is a button in form, it will close the modal */}
          <button
            onClick={(e) => {
              e.preventDefault();
              modalRef.current.close();
            }}
            className="btn btn-outline btn-neutral">
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

async function handleSubmit(e, setAdmins, adminId, modalRef) {
  e.preventDefault();

  const data = {
    id: adminId,
  };
  let response = await fetch("/api/admins", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.status === 200) return console.log("unsuccessful");

  setAdmins((managers) => managers.filter((manager) => manager.id !== adminId));

  modalRef.current.close();
}

export default DeleteModal;
