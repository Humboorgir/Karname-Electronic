import Backdrop from "@/components/backdrop";
import { FaRegTimesCircle } from "react-icons/fa";

const AddTeacher = ({ handleClose, setManagers }) => {
  const image = String(Math.floor(Math.random() * 5) + 1);
  return (
    <dialog id="addModal" className="modal">
      <form
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
        method="dialog"
        className="modal-box flex flex-col w-[min(350px,98vw)]"
      >
        <h3 className="text-lg mb-3">Add a new manager</h3>
        <input
          type="text"
          placeholder="Username"
          className="input border border-neutral-400 w-full max-w-xs mb-4"
        />
        <input
          type="text"
          placeholder="Full name"
          className="input border border-neutral-400 w-full max-w-xs"
        />

        <div className="modal-action">
          <button
            type="submit"
            className="btn bg-blue text-white hover:bg-sky-400"
          >
            Submit
          </button>
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-outline btn-error hover:!text-white text-white">
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

async function handleSubmit(e) {
  e.preventDefault();
  let data = {
    username: e.target.username.value,
    name: e.target.name.value,
    image,
  };
  const JSONdata = JSON.stringify(data);
  const response = await fetch("/api/managers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSONdata,
  });

  if (response.status !== 200) {
    document.querySelector("body").classList.add("shake");
    setTimeout(() => {
      document.querySelector("body").classList.remove("shake");
    }, 500);
    return;
  }
  handleClose();
  setManagers((managers) => [
    ...managers,
    {
      name: data.name,
      username: data.username,
      image: data.image,
    },
  ]);
}

export default AddTeacher;
