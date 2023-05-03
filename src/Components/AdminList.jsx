import { useState, useEffect } from "react";
import editImg from "../Images/edit.png"
import deleteImg from "../Images/delete.png"
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Staffs = () => {
    const navigate = useNavigate()
    const wrongError = "text-red-600 text-xs"
    const rightError = "text-green-600 text-xs"
    const [staff, setStaff] = useState([]);
    const [error, setError] = useState({})

    useEffect(() => {
        getStaffs()
    }, [])

    const getStaffs = async () => {
        const response = await fetch("hhttps://localhost:7256/api/authenticate/addAdmin", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const answer = await response.json();
        console.log(answer)
        setStaff(answer)
    }


    const deleteStaff = async (userId) => {
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
            const newData = staff.filter(item => item._id !== userId);
            setStaff(newData)
            toast.success("Staff deleted Successfully!");
        }
        else {
            error.message = "There was an error deleting data"
            error.style = wrongError
        }
    }

    return (
        <>
        <div className="flex flex-row w-full mt-10">
            <div className="flex w-full pt-10 px-10 flex-col pb-10">
                <div className="flex flex-row gap-x-5">
                    <div className="bg-purple-200 w-fit mb-10">
                        <div style={{ marginTop: "-22px" }} className="basisblack flex flex-row text-gray-900 text-2xl tracking-tighter ">Staff Details</div>
                    </div>
                    {/* <img style={{ marginTop: "-30px" }} src={carIMG} className="h-12 w-fit" /> */}
                </div>
                <div className={error.style}>{error.message}</div>
                <table className=" text-gray-600 text-xs font-medium rounded shadow-lg lato">
                    <thead>
                        <tr className="grid border-y grid-cols-12 place-items-center h-11 bg-gray-100">
                            <th className="col-span-1">S.N.</th>
                            <th className="col-span-2">Staff username</th>
                            <th className="col-span-2">Email</th>
                            <th className="col-span-2">Phone Number</th>
                            <th className="col-span-3">Password</th>
                            <th className="col-span-1">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {staff.map((value, index) => {
                            return (
                                <tr key={index} className={"border-y hover:bg-purple-100 grid grid-cols-12 h-11 max-h-11 place-items-center " + `${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}`}>
                                    <td className="col-span-1">{index + 1}</td>
                                    <td className="gap-x-1 col-span-2 px-4 py-2 overflow-hidden overflow-ellipsis whitespace-nowrap max-w-full">{value.userName}</td>
                                    <td className="gap-x-1 col-span-2 px-4 py-2 overflow-hidden overflow-ellipsis whitespace-nowrap max-w-full">{value.email}</td>
                                    <td className="gap-x-1 col-span-2 px-4 py-2 overflow-hidden overflow-ellipsis whitespace-nowrap max-w-full">{value.phoneNumber}</td>
                                    <td className="gap-x-1 col-span-3 px-4 py-2 overflow-hidden overflow-ellipsis whitespace-nowrap max-w-full">Hidden</td>
                                    <td className="flex items-center gap-x-5 col-span-1">
                                        <button onClick={() => { navigate(`/addStaffs/${value.Id}`)}}><img className="h-6" src={editImg} /></button>
                                        <button onClick={() => { deleteStaff(value._id) }}><img className="h-7" src={deleteImg} /></button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <button className="bg-gray-400 w-8 h-8 mt-8 text-white hover:bg-gray-700" onClick={() => { navigate("/addStaffs") }}>+</button>
            </div>
            <ToastContainer/>
        </div>
        </>
    );
}


export default Staffs;      