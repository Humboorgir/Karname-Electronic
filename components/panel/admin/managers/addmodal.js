import { useRef } from "react";

const AddModal = ({ setManagers }) => {
  const modalRef = useRef(null);

  const image = String(Math.floor(Math.random() * 5) + 1);
  return (
    <dialog id="addModal" className="modal" ref={modalRef}>
      <form
        onSubmit={(e) => handleSubmit(e, setManagers, modalRef)}
        onClick={(e) => e.stopPropagation()}
        method="dialog"
        className="modal-box flex flex-col w-[min(350px,98vw)]"
      >
        <h3 className="text-lg mb-3">Add a new manager</h3>
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
          <form method="dialog">
            <button className="btn btn-outline btn-error hover:!text-white text-white">
              Cancel
            </button>
          </form>
        </div>
      </form>

      {/* backdrop */}
      <form method="dialog" className="modal-backdrop">
        <button></button>
      </form>
    </dialog>
  );
};

async function handleSubmit(e, setManagers, modalRef) {
  e.preventDefault();
  const image = Math.floor(Math.random() * 5) + 1;
  const data = {
    username: e.target.username.value,
    name: e.target.name.value,
    image,
  };
  const response = await fetch("/api/managers", {
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

  console.log(res);
  modalRef.current.close();

  setManagers((managers) => [...managers, res]);
}

export default AddModal;
