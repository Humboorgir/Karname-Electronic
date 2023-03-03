import Backdrop from "@/components/backdrop";
import { FaRegTimesCircle } from "react-icons/fa";
const RemoveStudent = ({ handleClose, setStudents, removeStudent }) => {
  async function handleSubmit(e) {
    console.log(removeStudent.name);
    e.preventDefault();
    let response = await fetch("/api/deregister", {
      method: "POST",
      body: removeStudent.name,
    });
    let res = await response.json();
    if (res.ok) console.log("ok");
    setStudents((students) =>
      students.filter((student) => student.name !== removeStudent.name)
    );
    handleClose();
  }
  return (
    <Backdrop handleClose={handleClose}>
      <form
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
        className="animate-scale relative flex flex-col items-center justify-center gap-4 
        rounded-xl bg-white w-[min(350px,90vw)] h-[230px] mb-[5vh] px-8 pb-2 pt-8"
      >
        <FaRegTimesCircle
          className="text-[30px] absolute top-2 right-2 cursor-pointer"
          onClick={handleClose}
        />
        <div className="flex flex-col gap-2">
          <h1 className="bold text-lg text-center">
            آیا از حذف دانش آموز مطمئن هستید؟
          </h1>
          <p className="pr-2 text-right">
            با حذف این دانش آموز همه اطلاعات ایشان برای همیشه حذف خواهد شد
          </p>
        </div>
        <button
          type="submit"
          className="bg-red-500 text-white h-[40px] w-[228px] rounded-3xl mt-[10px]
           scale-1 transition-transform duration-300 clickAnimation"
        >
          تایید
        </button>
      </form>
    </Backdrop>
  );
};

export default RemoveStudent;
