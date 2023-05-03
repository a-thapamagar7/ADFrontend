import Car1 from '../Images/carIMG1.jpg';
import { FaCar, FaGasPump, FaCogs, FaRoad } from 'react-icons/fa';
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "./navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Car(props) {
  const navigate = useNavigate()
  const {id} = useParams();
  const [userid, setUserId] = useState("bc762d07-c09d-4ab7-adcd-1d981d49d83f")
  const [userName, setUserName] = useState("fa")
  const [startDate, setstartDate] = useState("")
  const [startTime, setstartTime] = useState("")
  const [carID, setCarID] = useState(id)
  const [carName, setCarName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [brand, setBrand] = useState("")
  const [numberOfRents, setNumberofRents] = useState("")
  const [condition, setCondition] = useState("")
  const [staffName, setStaffName] = useState("")
  const [approvedBy, setApprovedBy] = useState("")
  const [status, setStatus] = useState("")

  useEffect(()=>{
    getCar()
  },[])

  const requestCar = async(event) => {

    

    event.preventDefault()
    const datetime = new Date(Date.parse(`${startDate}T${startTime}:00.000Z`));
    const requestedDate = datetime.toISOString();
  
    const response = await fetch("https://localhost:7256/api/RequestContoller", {
      method: "POST",
      //sends the data in json format
      headers: {
        "Content-Type": "application/json"
      },
      //sends the states to the server
      body: JSON.stringify({
        userid,
        userName,
        requestedDate,
        carID,
        carName,
        staffName,
        approvedBy,
        status
      })
    })


    const data = await response.json();
    console.log(data)
    if (data) {
      toast.success("Car has been Requested!");
    }
    else {
      toast.error("Already requested");
    }

    console.log(data)
  }

  const getCar = async() => {
    const response = await fetch(`https://localhost:7256/api/Car/${id}`, {
      method: "GET",
      //sends the data in json format
      headers: {
        "Content-Type": "application/json"
      },
    })
    console.log(answer)
    const answer = response.json()
    if(answer) {
      setCarName(answer.carName)
      setDescription(answer.description)
      setCondition(answer.condition)
      setNumberofRents(answer.numberOfRents)
      setPrice(answer.price)
      setBrand(answer.brand)
    }
  }

  return (

    <>
      <NavBar />
      <div className="flex flex-col gap-y-5">
        <div className="w-full">
          <img src={'https://media.ed.edmunds-media.com/toyota/corolla/2023/oem/2023_toyota_corolla_sedan_xse_fq_oem_1_1600.jpg'} alt="My Image" className="w-full" />
        </div>
        <div className="flex flex-row mt-12">
          <div className="w-1/2 px-4 mx-44">
            <h1 className="text-4xl font-bold mb-4 F1-bold"> {carName}</h1>
            <span className="text-sm text-gray-500 font-thin ">{brand}</span>
            <span className="text-sm text-gray-500 font-thin ">{numberOfRents}</span>
            <h3 className="text-xl font-semibold mb-2 mt-4">Description</h3>
            <p className="text-lg font-thin text-justify ">{description}</p>
            <h3 className="text-xl font-semibold mb-2 mt-4">Features</h3>
            <div className="flex flex-row gap-x-10">
              <div className="w-1/2 text-left">
                <div className="flex flex-row gap-x-3 items-center">
                  <FaCar className="text-4xl mb-2" />
                  <p className="text-sm font-thin">Powerful Engine</p>
                </div>
              </div>
              <div className="w-1/2 text-left">
                <div className="flex flex-row gap-x-3 items-center">
                  <FaGasPump className="text-4xl mb-2" />
                  <p className="text-sm font-thin">Fuel Efficient</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-x-10 mt-6">
              <div className="w-1/2 text-left">
                <div className="flex flex-row gap-x-3 items-center">
                  <FaCogs className="text-4xl mb-2" />
                  <p className="text-sm font-thin ">Automatic Transmission</p>
                </div>
              </div>
              <div className="w-1/2 text-left">
                <div className="flex flex-row gap-x-3 items-center">
                  <FaRoad className="text-4xl mb-2" />
                  <p className="text-sm font-thin">Smooth Ride</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 px-4">
            <h1 className="text-4xl font-bold mb-4">Rs {props.price} / day</h1>
            <a href="/checkout">
              <span className="text-sm text-gray-500 font-thin border-b-2 border-gray-500 cursor-pointer mb-6"></span>
            </a>
            <div>
              <label className="text-xl font-thin  text-blue-400 mb-0 mt-7 block">Trip Start</label>
              <div className="flex flex-row  w-7/12 gap-x-3" >
                <input value={startDate} onChange={(e) => { setstartDate(e.target.value) }} type='date' className="border border-black-400 rounded-none w-full h-10" />
                <input value={startTime} onChange={(e) => { setstartTime(e.target.value) }} type='time' className="border border-black-400 rounded-none w-full h-10" />
              </div>
            </div>
            <div className="flex flex-row items-center w-5/12">
              { }
              <button onClick={(e) => { requestCar(e) }} class="label text-xl font-bold text-blue-400 mt-7 block inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full">
                Request Car
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </>

  );
}

export default Car;
