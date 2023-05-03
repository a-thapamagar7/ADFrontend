import { useState, useEffect } from "react";
import editImg from "../Images/edit.png"
import deleteImg from "../Images/delete.png"
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const RentalHistory = () => {
    const navigate = useNavigate()
    const wrongError = "text-red-600 text-xs"
    const rightError = "text-green-600 text-xs"
    const [rentalHistory, setUsers] = useState([]);
    const [error, setError] = useState({})

    useEffect(() => {
        getStaffs()
    }, [])

    const getStaffs = async () => {
        const response = await fetch("https://localhost:7256/api/authenticate/RentalHistory", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const answer = await response.json();
        console.log(answer)
        setUsers(answer)
    }


    // const deleteStaff = async (userId) => {
    //     const response = await fetch(`http://localhost:1447/api/rentalhistory/delete/${userId}`, {
    //         method: 'DELETE',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     const answer = await response.json();
    //     if (answer.message == "data_deleted") {
    //         const newError = { ...error }
    //         newError.message = "The data has been deleted"
    //         newError.style = rightError
    //         setError(newError)
    //         const newData = users.filter(item => item._id !== userId);
    //         setUsers(newData)
    //         toast.success("Staff deleted Successfully!");
    //     }
    //     else {
    //         error.message = "There was an error deleting data"
    //         error.style = wrongError
    //     }
    // }

    return (
        <>
            <div className="flex flex-row w-full mt-10">
            <div className="flex w-full pt-10 px-10 flex-col pb-10">
                <div className="flex flex-row gap-x-5">
                    <div className="bg-purple-200 w-fit mb-10">
                        <div style={{ marginTop: "-22px" }} className="basisblack flex flex-row text-gray-900 text-2xl tracking-tighter ">Car Rental History</div>
                    </div>
                    {/* <img style={{ marginTop: "-30px" }} src={carIMG} className="h-12 w-fit" /> */}
                </div>
                <div className={error.style}>{error.message}</div>
                <div className="grid basisregular grid-cols-12 items-center gap-y-2">
                            <div className="col-span-2">Username</div>
                            <input className="border border-black col-span-4 h-8 text-sm px-2 py-4" />
                </div>
                <div className="flex flex-row gap-x-4">
                    <label htmlFor="start_date">Start Date:</label>
                    <input type="date" id="start_date" name="start_date" />
                    <label htmlFor="end_date">End Date:</label>
                    <input type="date" id="end_date" name="end_date"/>
                </div>
                <br></br>
                <br></br>
                <table className=" text-gray-600 text-xs font-medium rounded shadow-lg lato">
                    <thead>
                        <tr className="grid border-y grid-cols-12 place-items-center h-11 bg-gray-100">
                            <th className="col-span-1">S.N.</th>
                            <th className="col-span-2">Customer's name</th>
                            <th className="col-span-2">Car name</th>
                            <th className="col-span-2">Requested Date</th>
                            <th className="col-span-2">Price</th>  
                            <th className="col-span-2">Authorized by</th>
                        </tr>
                    </thead>

                    <tbody>
                        {rentalHistory.map((value, index) => {
                            return (
                                <tr key={index} className={"border-y hover:bg-purple-100 grid grid-cols-12 h-11 max-h-11 place-items-center " + `${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}`}>
                                    <td className="col-span-1">{index + 1}</td>
                                    <td className="gap-x-1 col-span-2 px-4 py-2 overflow-hidden overflow-ellipsis whitespace-nowrap max-w-full">{value.userName}</td>
                                    <td className="gap-x-1 col-span-2 px-4 py-2 overflow-hidden overflow-ellipsis whitespace-nowrap max-w-full">{value.requestedDate}</td>
                                    <td className="gap-x-1 col-span-2 px-4 py-2 overflow-hidden overflow-ellipsis whitespace-nowrap max-w-full">{value.carID}</td>
                                    <td className="gap-x-1 col-span-2 px-4 py-2 overflow-hidden overflow-ellipsis whitespace-nowrap max-w-full">{value.staffName}</td>
                                    <td className="gap-x-1 col-span-1 px-4 py-2 overflow-hidden overflow-ellipsis whitespace-nowrap max-w-full">{value.status}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <ToastContainer/>
        </div>
        </>
    );
}


export default RentalHistory;