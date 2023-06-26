import Backdrop from "@/components/backdrop";
import { FaRegTimesCircle } from "react-icons/fa";
const TextField = ({ id, label }) => (
  <div className="flex flex-col items-start">
    <label htmlFor={id} className="ml-[4%]">
      {label}
    </label>
    <input
      id={id}
      name={id}
      placeholder={label}
      className="rounded-md px-2 py-2 border-2 border-neutral-500 focus:outline-none"
    ></input>
  </div>
);
const AddTeacher = ({ handleClose, setTeachers }) => {
  async function handleSubmit(e) {
    e.preventDefault();
    let data = {
      name: e.target.name.value,
      username: e.target.username.value,
      pfp: Math.floor(Math.random() * 5 + 1),
    };
    const JSONdata = JSON.stringify(data);
    const response = await fetch("/api/addteacher", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    });
    let res = await response.json();
    if (!res.ok) {
      document.querySelector("body").classList.add("shake");
      setTimeout(() => {
        document.querySelector("body").classList.remove("shake");
      }, 500);
      return;
    }
    handleClose();
    setTeachers((teachers) => [
      ...teachers,
      {
        name: data.name,
        username: data.username,
        pfp: data.pfp,
      },
    ]);
  }
  return (
    <Backdrop handleClose={handleClose}>
      <form
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
        className="animate-scale relative flex flex-col items-center justify-center gap-4 
        rounded-xl bg-white w-[min(350px,90vw)] h-[300px] mb-[5vh]"
      >
        <FaRegTimesCircle
          className="text-[30px] absolute top-2 right-2 cursor-pointer"
          onClick={handleClose}
        />
        <TextField id="name" label="نام" />
        <TextField id="username" label="کد ملی" />
        <button
          type="submit"
          className="bg-blue text-white h-[40px] w-[228px] rounded-3xl mt-[10px]
           scale-1 transition-transform duration-300 clickAnimation"
        >
          ثبت دبیر
        </button>
      </form>
    </Backdrop>
  );
};

export default AddTeacher;
