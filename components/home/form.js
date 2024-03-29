import { signIn } from "next-auth/react";
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

import Image from "next/image";

const Form = ({ setError }) => {
  const router = useRouter();
  const usernameInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const positionInputRef = useRef(null);

  useEffect(() => {
    if (router.query.error) {
      document.querySelector("body").classList.add("shake");
      setTimeout(() => {
        document.querySelector("body").classList.remove("shake");
      }, 500);
      setError({
        display: true,
        title: "خطا!",
        text: router.query.error,
      });
      setTimeout(() => {
        setError({
          display: false,
        });
      }, 4000);
    }
  }, [router]);
  async function handleSubmit(e) {
    e.preventDefault();
    let username = usernameInputRef.current.value;
    let password = passwordInputRef.current.value;
    let position = positionInputRef.current.value;
    const positions = {
      نماینده: "admin",
      دبیر: "teacher",
      "دانش آموز": "student",
    };
    position = positions[position];
    signIn("credentials", {
      username,
      password,
      position,
      redirect: false,
    }).then(({ ok, error }) => {
      if (ok) {
        window.location.replace(`/panel/${position}`);
      } else {
        router.push(`/?error=${error}`);
      }
    });
  }
  return (
    <form
      id="form"
      action="/api/auth"
      method="POST"
      className="flex flex-col gap-8 border-[1px] border-gray-400 rounded-lg p-10
        shadow-md w-[350px] relative">
      <img src="/waves.svg" className="top-0 left-0 absolute rounded-lg"></img>
      <div className="flex flex-row items-center justify-center gap-2">
        <Image className="z-10" width={30} height={30} src="/logo.svg" alt="Logo"></Image>
        <h1 className="bold text-white text-xl z-10">ورود کاربر</h1>
      </div>

      <div className="flex flex-col inputAnimationField mt-4">
        <label htmlFor="username" className="text-lg z-10 mb-[5px]">
          نام کاربری
        </label>
        <input
          type="text"
          name="username"
          id="username"
          ref={usernameInputRef}
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
          ref={passwordInputRef}
          className="border-b border-gray-500 px-2 py-2 focus:outline-none z-10"
        />
        <i className="relative" />
      </div>

      <div className="flex flex-col inputAnimationField -mt-2">
        <label htmlFor="username" className="text-lg z-10 mb-[5px]">
          نوع کاربر
        </label>
        <select
          id="position"
          ref={positionInputRef}
          className="z-10 select border-0 border-b border-b-gray-500 w-full max-w-xs 
          rounded-none focus:outline-none px-2">
          <option>دانش آموز</option>
          <option>دبیر</option>
          <option>نماینده</option>
        </select>
      </div>

      <button
        onClick={handleSubmit}
        type="submit"
        className="bg-blue rounded-3xl p-3 text-white z-10 clickAnimation">
        ورود
      </button>
    </form>
  );
};

export default Form;
