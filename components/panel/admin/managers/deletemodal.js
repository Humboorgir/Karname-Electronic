import { useRef } from "react";

const DeleteModal = ({ setManagers, managerId }) => {
  const modalRef = useRef(null);

  return (
    <dialog id="deleteModal" className="modal" ref={modalRef}>
      <form
        onSubmit={(e) => handleSubmit(e, setManagers, managerId, modalRef)}
        onClick={(e) => e.stopPropagation()}
        method="dialog"
        className="modal-box flex flex-col w-[min(350px,98vw)]"
      >
        <h3 className="bold text-xl text-center ">Are you sure?</h3>
        <p className="pt-3 px-3 text-center">
          By removing a manager from the system, all of their data will be
          deleted.
          <br /> This process cannot be undone.
        </p>

        <div className="modal-action">
          <button
            type="submit"
            className="btn bg-red-500 btn-error hover:!text-white text-white"
          >
            Confirm
          </button>
          {/* if there is a button in form, it will close the modal */}
          <button
            onClick={(e) => {
              e.preventDefault();
              modalRef.current.close();
            }}
            className="btn btn-outline btn-neutral"
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

async function handleSubmit(e, setManagers, managerId, modalRef) {
  e.preventDefault();

  const data = {
    id: managerId,
  };
  let response = await fetch("/api/managers", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.status === 200) return console.log("unsuccessful");

  setManagers((managers) =>
    managers.filter((manager) => manager.id !== managerId)
  );

  modalRef.current.close();
}

export default DeleteModal;
