import { useRef } from "react";

const EditModal = ({ setStudents, studentId }) => {
  const modalRef = useRef(null);

  return (
    <dialog id="editModal" className="modal" ref={modalRef}>
      <form
        onSubmit={(e) => handleSubmit(e, setStudents, studentId, modalRef)}
        onClick={(e) => e.stopPropagation()}
        method="dialog"
        className="modal-box flex flex-col w-[min(350px,98vw)]"
      >
        <h3 className="text-lg mb-3">Edit a manager's information</h3>
        <input
          type="text"
          placeholder="Username"
          name="username"
          className="input border border-neutral-400 w-full max-w-xs mb-4"
          required
        />
        <input
          type="text"
          placeholder="Full name"
          name="name"
          className="input border border-neutral-400 w-full max-w-xs"
          required
        />

        <div className="modal-action">
          <button
            type="submit"
            className="btn bg-blue text-white hover:bg-sky-400"
          >
            Submit
          </button>
          {/* if there is a button in form, it will close the modal */}
          <button
            onClick={(e) => {
              e.preventDefault();
              modalRef.current.close();
            }}
            className="btn btn-outline btn-error hover:!text-white text-white"
          >
            Cancel
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
    username: e.target.username.value,
    name: e.target.name.value,
    id: studentId,
  };
  const response = await fetch("/api/students", {
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
  setStudents((students) => {
    const updatedStudents = students.map((student) => {
      if (student.id === studentId) {
        return { ...student, name: data.name };
      } else {
        return student;
      }
    });
    return updatedStudents;
  });
}

export default EditModal;
