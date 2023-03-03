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
const EditStudent = ({ handleClose, students, setStudents, editStudent }) => {
  async function handleSubmit(e) {
    e.preventDefault();
    let data = {
      oldName: editStudent.name,
      name: e.target.name.value,
      username: e.target.username.value,
    };
    const JSONdata = JSON.stringify(data);
    const response = await fetch("/api/editstudent", {
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
    let newStudents = students.slice();
    let theStudent = newStudents.find((x) => x.name == editStudent.name);
    let index = newStudents.indexOf(theStudent);
    newStudents[index].name = e.target.name.value;
    console.table(newStudents);
    setStudents(newStudents);
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
        <TextField id="name" label="نام جدید" />
        <TextField id="username" label="کد ملی جدید" />
        <button
          type="submit"
          className="bg-blue text-white h-[40px] w-[228px] rounded-3xl mt-[10px]
           scale-1 transition-transform duration-300 clickAnimation"
        >
          ویراش اطلاعات
        </button>
      </form>
    </Backdrop>
  );
};

export default EditStudent;
