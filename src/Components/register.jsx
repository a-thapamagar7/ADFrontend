import React from "react"
import loginImage from '../Images/loginIMG.jpg';
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate()
  return (
    <div className="w-full">
      <div className="flex w-full h-screen">
        <img className="flex w-1/2 bg-cover" src={loginImage} alt="Login image" />
        <div className="flex w-1/2 text-center flex-col justify-center">
          <div className="flex justify-center w-full px-32 flex-col">
            <div className="flex flex-col items-start mb-10 gap-y-2">
              <span className="F1-bold text-3xl font-bold">
                Create an account
              </span>
              <h2 className="F1-light text-base">Let's get started with your 30 day trial</h2>
            </div>
            <form className="flex flex-col w-full gap-y-5 ">
              <input type="text" id="username" placeholder="Username" className="border-b h-10 focus:outline-none focus:ring-0 focus:border-black" />
              <input type="text" id="email" placeholder="Email" className="border-b h-10 focus:outline-none focus:ring-0 focus:border-black" />
              <input type="text" id="number" placeholder="Phone Number" className="border-b h-10 focus:outline-none focus:ring-0 focus:border-black" />
              <input type="text" id="address" placeholder="Address" className="border-b h-10 focus:outline-none focus:ring-0 focus:border-black" />
              <input type="password" id="password" placeholder="Password" className="border-b h-10 focus:outline-none focus:ring-0 focus:border-black" />
              <label className="block basisregular mb-2 text-sm font-medium text-gray-900" for="file_input">Upload your citizenship/driving license</label>
              <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none basisregular " id="file_input" type="file" />

              <button className="bg-black hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-black hover:border-black rounded" type="submit">
                Register
              </button>
              <span>Have an account?  <span onClick={() => { navigate("/login") }} className="underline font-bold cursor-pointer"> Sign In Here</span></span>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Register;