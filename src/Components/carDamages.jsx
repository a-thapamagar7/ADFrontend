import { useState, useEffect } from "react";
import editImg from "../Images/edit.png"
import deleteImg from "../Images/delete.png"
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const ActiveUsers = () => {
    const navigate = useNavigate()
    const wrongError = "text-red-600 text-xs"
    const rightError = "text-green-600 text-xs"
    const [users, setUsers] = useState([]);
    const [error, setError] = useState({})

    useEffect(() => {
        getCars()
    }, [])

    const getCars = async () => {
        const response = await fetch("https://localhost:7256/api/cars/cardamage", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const answer = await response.json();
        console.log(answer)
        setUsers(answer)
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
                            <th className="col-span-2">Car Damage</th>
                            <th className="col-span-2">Paid</th>
                            <th className="col-span-2">Unpaid</th>
                            
                        </tr>
                    </thead>

                    <tbody>
                        {users.map((value, index) => {
                            return (
                                <tr key={index} className={"border-y hover:bg-purple-100 grid grid-cols-12 h-11 max-h-11 place-items-center " + `${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}`}>
                                    <td className="col-span-1">{index + 1}</td>
                                    <td className="gap-x-1 col-span-2 px-4 py-2 overflow-hidden overflow-ellipsis whitespace-nowrap max-w-full">{value.damage}</td>
                                    <td className="gap-x-1 col-span-2 px-4 py-2 overflow-hidden overflow-ellipsis whitespace-nowrap max-w-full">{value.paid}</td>
                                    <td className="gap-x-1 col-span-2 px-4 py-2 overflow-hidden overflow-ellipsis whitespace-nowrap max-w-full">{value.unpaid}</td>
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


export default ActiveUsers;