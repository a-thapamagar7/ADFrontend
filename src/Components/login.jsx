import React, { useState } from "react"
import loginImage from '../Images/loginIMG.jpg';
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const OnSubmit = (event) => {
    event.preventDefault()
    console.log(email)
    console.log(password)
  }



  return (
    <div className="w-full">
      <div className="flex w-full h-screen">
        <img className="flex w-1/2 bg-cover" src={loginImage} alt="Login image" />
        <div className="flex w-1/2 text-center flex-col justify-center">
          <div className="flex justify-center w-full px-32 flex-col">
            <div className="flex flex-col items-start mb-12 gap-y-2">
              <span className="F1-bold text-3xl font-bold">
                Welcome back, User
              </span>
              <h2 className="F1-light text-base">Please enter your details to Login</h2>
            </div>
            <form onSubmit={(e)=>OnSubmit(e)} className="flex flex-col w-full gap-y-10 ">
              <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" id="username" placeholder="Enter username" className="border-b h-6 focus:outline-none focus:ring-0 focus:border-black" />
              <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" id="password" placeholder="Enter password" className="border-b h-6 focus:outline-none focus:ring-0 focus:border-black" />
              <button type="submit" className="bg-black hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-black hover:border-black rounded">
                LOGIN
              </button>
              <span>Don't have an account?  <span onClick={() => { navigate("/register") }} className="underline font-bold cursor-pointer"> Sign up for free</span></span>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}
export default Login;