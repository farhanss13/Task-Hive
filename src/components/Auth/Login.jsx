import React, { useState } from "react";

const Login = ({handleLogin}) => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const submitHandler=(e)=>{
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }
  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <div className="border-2 border-emerald-400 p-20 rounded-lg">
        <form action="" onSubmit={(e)=>{
            submitHandler(e)
        }} className="flex flex-col justify-center items-center">
          <input
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
            className=" text-white required outline-none bg-transparent border-2 border-emerald-400 px-2.5 py-1.5 rounded-full text-xl placeholder:text-gray-400"
            type="email"
            placeholder="Enter Your Email"
          />
          <input
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
            className=" text-white  required outline-none bg-transparent border-2 mt-3 border-emerald-400 px-2.5 py-1.5 rounded-full text-xl placeholder:text-gray-400"
            type="password"
            placeholder="Enter Your Password"
          />
          <button className=" text-white  bg-emerald-500 border-2 border-none mt-3 px-1.5 py-2.5 rounded-3xl w-28 text-xl">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
