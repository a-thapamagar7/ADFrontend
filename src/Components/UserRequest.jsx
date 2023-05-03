import { useState, useEffect } from "react";
import Car from "./Car";
import Footer from "./Footer";
import NavBar from "./navbar";
import { useNavigate } from "react-router-dom";

const UserRequest = () => {

    const [request, setRequest] = useState([])
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const navigate = useNavigate("")

    useEffect(()=>{
        getRequests()
    }, [])

    const getRequests = async () => {
        const response = await fetch(`https://localhost:7256/api/RequestContoller/GetRequestByUser/${localStorage.getItem("userID")}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const answer = await response.json();
        setRequest(answer)
    }

    return (
        <>
            <NavBar/>
            <div className="w-full flex flex-col items-center mt-10 gap-y-10">
                    <div className="bg-purple-200 w-fit mb-10">
                        <div style={{ marginTop: "-22px" }} className="basisblack mt-10  flex flex-row text-gray-900 text-2xl tracking-tighter ">My Requests</div>
                    </div>
                {request.map((value, index)=>{
                    return(
                        <div className="shadow-lg w-8/12 basisrgular px-5 border py-7 rounded flex flex-col gap-y-2">
                            <div className="grid  grid-cols-12 items-center">
                                <div className="col-span-3 basisblack">Car ID:</div>
                                <div className="col-span-4">{value.carID}</div>
                            </div>
                            <div className="grid  grid-cols-12 items-center">
                                <div className="col-span-3 basisblack">Requested Date:</div>
                                <div className="col-span-4">{new Date(value.requestedDate).toUTCString()}</div>
                            </div>
                            <div className="grid  grid-cols-12 items-center">
                                <div className="col-span-3 basisblack">Requested Date:</div>
                                <div className="col-span-4">{new Date(value.requestedDate).toUTCString()}</div>
                            </div>
                           
                            {value.status === "Pending"? <button className="mt-5 w-fit bg-red-500  rounded text-white border-2 border-red-500 px-4 py-1 p basisblack">Cancel</button>
                            :  
                            <div className="grid  grid-cols-12 items-center">
                                <div className="col-span-3 basisblack">Approved By:</div>
                                <div className="col-span-4">{value.approvedBy}</div>
                            </div>}

                            {value.status == "Accepted"? 
                                <button onClick={() => navigate(`/damage/${value.carID}`)} className="border w-fit bg-indigo-500 border-indigo-500 text-white basisblack p-2">
                                    Send Damage Request
                                </button>
                            :  
                            <></>}

                            {value.status == "Declined"? <div className="mt-5 rounded text-red-500 border-2 border-red-500 p-1 basisblack text-center">Rejected</div>
                            :  
                            <></>}
                            
                        </div>
                       
                    )
                })}
            </div>
            <Footer/>
        </>
    );
}

export default UserRequest;