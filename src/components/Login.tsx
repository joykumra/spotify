import React from "react";
import { loginUrl } from "../spotify";

function Login() {
  return (
    <div className="grid place-items-center h-screen bg-black">
      <img
        className="w-full max-w-[600px] object-contain"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="spotify"
      ></img>
      <a
        href={loginUrl}
        className="p-[20px] bg-primary-green rounded-full uppercase font-extrabold text-white"
      >
        Login with spotify
      </a>
    </div>
  );
}

export default Login;
