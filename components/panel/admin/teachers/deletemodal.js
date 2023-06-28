import { useRef } from "react";

const DeleteModal = ({ setStudents, studentId }) => {
  const modalRef = useRef(null);

  return (
    <dialog id="deleteModal" className="modal" ref={modalRef}>
      <form
        onSubmit={(e) => handleSubmit(e, setStudents, studentId, modalRef)}
        onClick={(e) => e.stopPropagation()}
        method="dialog"
        className="modal-box flex flex-col w-[min(350px,98vw)]"
      >
        <h3 className="bold text-xl text-right mr-4 ">آیا مطمئن هستید؟</h3>
        <p className="pt-3 px-3 text-right">
          با حذف یک دانش آموز از سیستم, تمام اطلاعات آنها برای همیشه از بین
          خواهد رفت
          <br /> این فرآیند قابل بازگشت نیست
        </p>

        <div className="modal-action mt-4">
          <button
            type="submit"
            className="btn bg-red-500 btn-error hover:!text-white text-white"
          >
            تایید و حذف دانش آموز
          </button>
          {/* if there is a button in form, it will close the modal */}
          <button
            onClick={(e) => {
              e.preventDefault();
              modalRef.current.close();
            }}
            className="btn btn-outline btn-neutral"
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

async function handleSubmit(e, setStudents, studentId, modalRef) {
  e.preventDefault();

  const data = {
    id: studentId,
  };
  let response = await fetch("/api/students", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.status === 200) return console.log("unsuccessful");

  setStudents((students) =>
    students.filter((student) => student.id !== studentId)
  );

  modalRef.current.close();
}

export default DeleteModal;
