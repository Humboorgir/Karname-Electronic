import { FaExclamationTriangle } from "react-icons/fa";
// next-auth/client was renamed to next-auth/react in v4
import { signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
const Form = () => {
  const router = useRouter();
  // const [error, setError] = useState("");
  if (router.query.error) {
    console.log(router.query.error);
    alert(router.query.error);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    signIn("credentials", {
      username,
      password,
      redirect: false,
    }).then(({ ok, error }) => {
      if (ok) {
        console.log("user found");
        router.push("/dashboard/admin");
      } else {
        console.log(error);
        router.push(`/login/admin?error=${error}`);
      }
    });
  }
  return (
    <div className="pt-[5vh] h-[60vh] flex flex-col justify-start items-center w-full">
      <form
        action="/api/auth"
        method="POST"
        className="flex flex-col gap-8 border-[1px] border-gray-400 rounded-lg p-10
        shadow-md w-[350px] relative"
      >
        <img
          src="/wavesRed.svg"
          className="top-0 left-0 absolute rounded-lg"
        ></img>
        <div className="flex flex-row items-center justify-center gap-2">
          <h1 className="bold text-white text-xl z-10">ورود نماینده</h1>
          <FaExclamationTriangle className="h-[50px] z-10 text-yellow-400 text-[25px]"></FaExclamationTriangle>
        </div>
        <div className="flex flex-col inputAnimationField">
          <label htmlFor="username" className="text-lg z-10 mb-[5px]">
            نام کاربری
          </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="نام کاربری"
            className="border-b-[1px] border-gray-500 px-2 py-2 focus:outline-none z-10"
          />
          <i className="relative" />
        </div>
        <div className="flex flex-col inputAnimationField">
          <label htmlFor="password" className="text-lg z-10 mb-[5px]">
            رمز عبور
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="رمز عبور"
            className="border-b-[1px] border-gray-500 px-2 py-2 focus:outline-none z-10"
          />
          <i className="relative" />
        </div>
        <button
          onClick={handleSubmit}
          type="submit"
          className="bg-red-500 rounded-3xl p-3 text-white z-10 clickAnimation"
        >
          ورود
        </button>
      </form>
    </div>
  );
};

export default Form;
