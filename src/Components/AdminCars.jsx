import { useState, useEffect } from "react";
import editImg from "../Images/edit.png"
import deleteImg from "../Images/delete.png"
import { useNavigate } from "react-router-dom";
import carIMG from "../Images/car.png"
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const AdminCars = () => {
    const navigate = useNavigate()
    const wrongError = "text-red-600 text-xs"
    const rightError = "text-green-600 text-xs"
    const [car, setCar] = useState([]);
    const [error, setError] = useState({})

    useEffect(() => {
        getCars()
    }, [])

    const getCars = async () => {
        const response = await fetch("https://localhost:7256/api/Car/GetAllCars", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const answer = await response.json();
        console.log(answer)
        setCar(answer)
    }

    const deleteCars = async (userId) => {
        const response = await fetch(`https://localhost:7256/api/Car/${userId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (response.status == "204") {
            const newError = { ...error }
            newError.message = "The data has been deleted"
            newError.style = rightError
            setError(newError)
            const newData = car.filter(item => item.carId !== userId);
            setCar(newData)
            toast.success("Car deleted successfully!");
        }
        else {
            error.message = "There was an error deleting data"
            error.style = wrongError
        }
    }


    return (
        <div className="flex flex-row w-full mt-10">
            <div className="flex w-full pt-10 px-10 flex-col pb-10">
                <div className="flex flex-row gap-x-5">
                    <div className="bg-purple-200 w-fit mb-10">
                        <div style={{ marginTop: "-22px" }} className="basisblack flex flex-row text-gray-900 text-2xl tracking-tighter ">Cars</div>
                    </div>
                    <img style={{ marginTop: "-30px" }} src={carIMG} className="h-12 w-fit" />
                </div>
                <div className={error.style}>{error.message}</div>
                <table className=" text-gray-600 text-xs font-medium rounded shadow-lg lato">
                    <thead>
                        <tr className="grid border-y grid-cols-12 place-items-center h-11 bg-gray-100">
                            <th className="col-span-1">S.N.</th>
                            <th className="col-span-1">Name</th>
                            <th className="col-span-1">Brand</th>
                            <th className="col-span-1">Image</th>
                            <th className="col-span-3">Description</th>
                            <th className="col-span-1">Price</th>
                            <th className="col-span-1">Condition</th>
                            <th className="col-span-1">Number of Rents</th>
                            <th className="col-span-1">Created By</th>
                            <th className="col-span-1"></th>
                        </tr>
                    </thead>

                    <tbody>
                        {car.map((value, index) => {
                            return (
                                <tr key={index} className={"border-y hover:bg-purple-100 grid grid-cols-12 h-11 max-h-11 place-items-center " + `${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}`}>
                                    <td className="col-span-1">{index + 1}</td>
                                    <td className="gap-x-1 col-span-1 px-4 py-2 overflow-hidden overflow-ellipsis whitespace-nowrap max-w-full">{value.carName}</td>
                                    <td className="gap-x-1 col-span-1 px-4 py-2 overflow-hidden overflow-ellipsis whitespace-nowrap max-w-full">{value.brand}</td>
                                    <td className="gap-x-1 col-span-1 px-4 py-2 overflow-hidden overflow-ellipsis whitespace-nowrap max-w-full">{value.image}</td>
                                    <td className="gap-x-1 col-span-3 px-4 py-2 overflow-hidden overflow-ellipsis whitespace-nowrap max-w-full">{value.description}</td>
                                    <td className="gap-x-1 col-span-1 px-4 py-2 overflow-hidden overflow-ellipsis whitespace-nowrap max-w-full">{value.price}</td>
                                    <td className="gap-x-1 col-span-1 px-4 py-2 overflow-hidden overflow-ellipsis whitespace-nowrap max-w-full">{value.condition}</td>
                                    <td className="gap-x-1 col-span-1 px-4 py-2 overflow-hidden overflow-ellipsis whitespace-nowrap max-w-full">{value.numberOfRents}</td>
                                    <td className="gap-x-1 col-span-1 px-4 py-2 overflow-hidden overflow-ellipsis whitespace-nowrap max-w-full">{value.createdBy}</td>
                                    <td className="flex items-center gap-x-5 col-span-1">
                                        <button onClick={() => { navigate(`/admin/cars/add/${value.carId}`) }}><img className="h-6" src={editImg} /></button>
                                        <button onClick={() => { deleteCars(value.carId) }}><img className="h-7" src={deleteImg} /></button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <button className="bg-gray-400 w-8 h-8 mt-8 text-white hover:bg-gray-700" onClick={() => { navigate("/admin/cars/add") }}>+</button>
            </div>
            <ToastContainer/>
        </div>

    );
}

export default AdminCars;