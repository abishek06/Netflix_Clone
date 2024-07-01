import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignedIn, setSignedIn] = useState(true);

  const toggleSignIn = () => {
    setSignedIn(!isSignedIn);
  };

  return (
    <div>
      <Header></Header>
      <div>
        <img
          className="absolute"
          alt="bglogo"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_small.jpg"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-32 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-center text-3xl my-4">
          {isSignedIn ? "Sign In" : "Sign up"}
        </h1>
        {!isSignedIn && (
          <input
            type="text"
            className="p-3 my-3 w-full bg-gray-700"
            placeholder="Email Full Name"
          ></input>
        )}
        <input
          type="text"
          className="p-3 my-3 w-full bg-gray-700"
          placeholder="Email Address"
        ></input>
        <input
          className="p-3 my-3 w-full bg-gray-700"
          type="password"
          placeholder="Enter Password"
        ></input>
        <button className="p-3 my-6 bg-red-700 w-full rounded-lg">
          Submit
        </button>
        <p className="cursor-pointer p-3" onClick={toggleSignIn}>
          {isSignedIn
            ? "New To Netflix!! Sign Up"
            : "Already Registered? Login"}
        </p>
      </form>
    </div>
  );
};

export default Login;
