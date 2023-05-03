import React, { useState } from "react"
import loginImage from '../Images/loginIMG.jpg';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {

  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [addressName, setAddress] = useState("")
  const [country, setCountry] = useState("")
  const [city, setCity] = useState("")
  const [postalCode, setPostalCode] = useState("")
  const [phone, setPhone] = useState("")
  const [citizenshipOrDrivingLicense, setFile] = useState("")
  const [password, setPassword] = useState("")

  const registerUser = async (event) => {
    event.preventDefault()
    const response = await fetch("https://localhost:7256/api/authenticate/register", {
      method: "POST",
      //sends the data in json format
      headers: {
        "Content-Type": "application/json"
      },
      //sends the states to the server
      body: JSON.stringify({
        username,
        email,
        addressName,
        country,
        city,
        postalCode,
        phone,
        password,
        citizenshipOrDrivingLicense
      })
    })

    const data = await response.json();
    
    if (data.status = "Success") {
      toast.success(data.message);
      setUsername("")
      setEmail("")
      setAddress("")
      setCountry("")
      setCity("")
      setPostalCode("")
      setPhone("")
      setFile("")
      setPassword("")
    }
    else {
      toast.error(data.message);
    }

  }
  return (
    <div className="w-full">
      <div className="flex w-full h-fit">
        <img className="flex w-1/2 bg-cover" src={loginImage} alt="Login image" />
        <div className="flex w-1/2 text-center flex-col justify-center">
          <div className="flex justify-center w-full px-32 flex-col">
            <div className="flex flex-col items-start mb-10 gap-y-1">
              <span className="F1-bold text-3xl font-bold">
                Create an account
              </span>
              <h2 className="F1-light text-base">Let's get started with your 30 day trial</h2>
            </div>
            <form onSubmit={(e) => { registerUser(e) }} className="flex flex-col w-full gap-y-5 ">
              <input value={username} onChange={(e) => { setUsername(e.target.value) }} type="text" id="username" placeholder="Username" className="border-b h-10 focus:outline-none focus:ring-0 focus:border-black" />
              <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="text" id="email" placeholder="Email" className="border-b h-10 focus:outline-none focus:ring-0 focus:border-black" />
              <input value={phone} onChange={(e) => { setPhone(e.target.value) }} type="text" id="number" placeholder="Phone Number" className="border-b h-10 focus:outline-none focus:ring-0 focus:border-black" />
              <div className="flex text-center flex-row justify-center gap-x-6" >
                <input value={addressName} onChange={(e) => { setAddress(e.target.value) }} type="text" id="address" placeholder="Address" className="border-b h-10 focus:outline-none focus:ring-0 focus:border-black" />
                <input value={city} onChange={(e) => { setCity(e.target.value) }} type="text" id="city" placeholder="City" className="border-b h-10 focus:outline-none focus:ring-0 focus:border-black " />
              </div>
              <div className="flex text-center flex-row justify-center gap-x-6" >
                <input value={country} onChange={(e) => { setCountry(e.target.value) }} type="text" id="country" placeholder="Country" className="border-b h-10 focus:outline-none focus:ring-0 focus:border-black" />
                <input value={postalCode} onChange={(e) => { setPostalCode(e.target.value) }} type="text" id="postalCode" placeholder="Postal Code" className="border-b h-10 focus:outline-none focus:ring-0 focus:border-black" />
              </div>
              <input value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" id="password" placeholder="Password" className="border-b h-10 focus:outline-none focus:ring-0 focus:border-black" />
              <label className="mb-1 text-sm font-medium text-gray-900" for="file_input">Upload your citizenship/driving license</label>
              <input value={citizenshipOrDrivingLicense} onChange={(e) => { setFile(e.target.value) }} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-non dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />
              <button type="submit" className="bg-black hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-black hover:border-black rounded">Register</button>
              <span>Have an account?  <span onClick={() => { navigate("/login") }} className="underline font-bold cursor-pointer"> Sign In Here</span></span>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Register;