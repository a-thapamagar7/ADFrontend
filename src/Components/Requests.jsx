import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import editImg from "../Images/check-mark.png"
import deleteImg from "../Images/cross.png"
import VerticalNavbar from "./VerticalNavbar";
// import carIMG from "../Images/car.png"

const Requests = () => {
    const navigate = useNavigate()
    const wrongError = "text-red-600 text-xs"
    const rightError = "text-green-600 text-xs"
    const [request, setRequest] = useState([]);
    const [error, setError] = useState({})

    useEffect(() => {
        getRequests()
    }, [])

    //TO DISPLAY REQUESTS (Get requests)
    const getRequests = async () => {
        const response = await fetch("https://localhost:7256/api/RequestContoller", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const answer = await response.json();
        console.log(answer)
        setRequest(answer)
    }

    const AcceptRequest = async(userId) => {
        const response = await fetch(`https://localhost:7256/api/RequestContoller/${userId}/accept?approvedBy=${"5fdf4a8b-312b-4630-ade8-8f2a470d43bd"}`, {
            method: "Post",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const answer = response.json()
        if(response.status == "200"){

        }
        else {

        }

    }

    const DeclineRequest = async(userId) => {
        const response = await fetch(`https://localhost:7256/api/RequestContoller/${userId}/decline?approvedBy=${"5fdf4a8b-312b-4630-ade8-8f2a470d43bd"}`, {
            method: "Post",
            headers: {
                "Content-Type": "application/json"
            }
        })
        console.log(answer)
        const answer = response.json()
        if(response.status == "200"){

        }
        else {

        }

    }

    const MakeNormalDate = (utcTimestamp) => {
        const date = new Date(utcTimestamp);
        const localDateString = date.toLocaleString();
        return localDateString
    }



    const deleteCars = async (userId) => {
        const response = await fetch(`http://localhost:1447/api/car/delete/${userId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const answer = await response.json();
        if (answer.message == "data_deleted") {
            const newError = { ...error }
            newError.message = "The data has been deleted"
            newError.style = rightError
            setError(newError)
            const newData = request.filter(item => item._id !== userId);
            setRequest(newData)
        }
        else {
            error.message = "There was an error deleting data"
            error.style = wrongError
        }
    }


    return (
        <div  className="flex flex-row w-full">
            <VerticalNavbar/>
            <div className="flex flex-row w-full mt-10">
                <div className="flex w-full pt-10 px-10 flex-col pb-10">
                    <div className="flex flex-row gap-x-5">
                        <div className="bg-purple-200 w-fit mb-10">
                            <div style={{ marginTop: "-22px" }} className="basisblack flex flex-row text-gray-900 text-2xl tracking-tighter ">Car Requests</div>
                        </div>
                        {/* <img style={{ marginTop: "-30px" }} src={carIMG} className="h-12 w-fit" /> */}
                    </div>
                    <div className={error.style}>{error.message}</div>
                    <table className=" text-gray-600 text-xs font-medium rounded shadow-lg lato">
                        <thead>
                            <tr className="grid border-y grid-cols-12 place-items-center h-11 bg-gray-100">
                                <th className="col-span-1">S.No</th>
                                <th className="col-span-2">User Name</th>
                                <th className="col-span-2">Requested Date</th>
                                <th className="col-span-2">Car Name</th>
                                <th className="col-span-2">Staff Name</th>
                                <th className="col-span-1">Status</th>
                                <th className="col-span-1">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {request.map((value, index) => {
                                return (
                                    <tr key={index} className={"border-y hover:bg-purple-100 grid grid-cols-12 h-11 max-h-11 place-items-center " + `${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}`}>
                                        <td className="col-span-1">{index + 1}</td>
                                        <td className="gap-x-1 col-span-2 px-4 py-2 overflow-hidden overflow-ellipsis whitespace-nowrap max-w-full">{value.userName}</td>
                                        <td className="gap-x-1 col-span-2 px-4 py-2 overflow-hidden overflow-ellipsis whitespace-nowrap max-w-full">{MakeNormalDate(value.requestedDate)}</td>
                                        <td className="gap-x-1 col-span-2 px-4 py-2 overflow-hidden overflow-ellipsis whitespace-nowrap max-w-full">{value.carID}</td>
                                        <td className="gap-x-1 col-span-2 px-4 py-2 overflow-hidden overflow-ellipsis whitespace-nowrap max-w-full">{value.staffName? value.staffName:"Pending"}</td>
                                        <td className="gap-x-1 col-span-1 px-4 py-2 overflow-hidden overflow-ellipsis whitespace-nowrap max-w-full">{value.status}</td>
                                        <td className="flex items-center gap-x-5 col-span-1">
                                            {value.status === "Pending"? 
                                            <>
                                                <button onClick={() => { AcceptRequest(value.requestId) }}><img className="h-5" src={editImg} /></button>
                                                <button onClick={() => { DeclineRequest(value.requestId) }}><img className="h-5" src={deleteImg} /></button>
                                            </>
                                            :
                                            <>
                                                {value.status === "Accepted"? <button className="bg-indigo-500 text-white px-2 py-1 rounded">Complete</button>:<></>}
                                            </>}
                                            
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        

    );
}

export default Requests;