import { useState, useEffect } from "react";
import editImg from "../Images/edit.png"
import deleteImg from "../Images/delete.png"
import { useNavigate } from "react-router-dom";
import confetti from "../Images/confetti.png"
import VerticalNavbar from "./VerticalNavbar";

const AdminOffers = () => {
    const navigate = useNavigate()
    const wrongError = "text-red-600 text-xs"
    const rightError = "text-green-600 text-xs"
    const [offer, setOffer] = useState([]);
    const [error, setError] = useState({})

    useEffect(() => {
        getOffers()
    }, [])

    const getOffers = async () => {
        const response = await fetch("https://localhost:7256/api/Offer", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const answer = await response.json();
        setOffer(answer)
        console.log(answer)
    }

    const MakeNormalDate = (utcTimestamp) => {
        const date = new Date(utcTimestamp);
        const localDateString = date.toLocaleString();
        return localDateString
    }

    const deleteOffers = async (userId) => {

        const response = await fetch(`https://localhost:7256/api/Offer/${userId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const newData = offer.filter(item => item.offerId !== userId);
        setOffer(newData)
        if (response.status == "204") {
            const newError = { ...error }
            newError.message = "The data has been deleted"
            newError.style = rightError
            setError(newError)
            
            
        }
        else {
            error.message = "There was an error deleting data"
            error.style = wrongError
        }
    }


    return (
        <div className="flex flex-row w-full">
            <VerticalNavbar/>
            <div className="flex flex-row w-full mt-10">
                <div className="flex w-full pt-10 px-10 flex-col pb-10">
                    <div className="flex flex-row gap-x-5">
                        <div className="bg-purple-200 w-fit mb-10">
                            <div style={{ marginTop: "-22px" }} className="basisblack flex flex-row text-gray-900 text-2xl tracking-tighter ">Offers</div>
                        </div>
                        <img style={{ marginTop: "-30px" }} src={confetti} className="h-10 w-fit"/>
                    </div>
                
                    <div className={error.style}>{error.message}</div>
                    <table className=" text-gray-600 text-xs font-medium rounded shadow-lg lato">
                        <thead>
                            <tr className="grid border-y grid-cols-12 place-items-center h-11 bg-gray-100">
                                <th className="col-span-1">S.N.</th>
                                <th className="col-span-2">Start Date</th>
                                <th className="col-span-2">End Date</th>
                                <th className="col-span-1">Type</th>
                                <th className="col-span-1">Value</th>
                                <th className="col-span-3">Description</th>
                                <th className="col-span-1">Created By</th>
                                <th className="col-span-1"></th>
                            </tr>
                        </thead>

                        <tbody>
                            {(offer.length != 0)?
                                <>
                                    {offer.map((value, index) => {
                                    return (
                                            <tr key={index} className={"border-y hover:bg-purple-100 grid grid-cols-12 h-11 max-h-11 place-items-center " + `${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}`}>
                                                <td className="col-span-1">{index + 1}</td>
                                                <td className="gap-x-1 col-span-2 px-4 py-2 overflow-hidden overflow-ellipsis whitespace-nowrap max-w-full">{MakeNormalDate(value.startDate)}</td>
                                                <td className="gap-x-1 col-span-2 px-4 py-2 overflow-hidden overflow-ellipsis whitespace-nowrap max-w-full">{MakeNormalDate(value.endDate)}</td>
                                                <td className="gap-x-1 col-span-1 px-4 py-2 overflow-hidden overflow-ellipsis whitespace-nowrap max-w-full">{value.type}</td>
                                                <td className="gap-x-1 col-span-1 px-4 py-2 overflow-hidden overflow-ellipsis whitespace-nowrap max-w-full">{value.value}</td>
                                                <td className="gap-x-1 col-span-3 px-4 py-2 overflow-hidden overflow-ellipsis whitespace-nowrap max-w-full">{value.offerDescription}</td>
                                                <td className="gap-x-1 col-span-1 px-4 py-2 overflow-hidden overflow-ellipsis whitespace-nowrap max-w-full">{value.createdBy}</td>
                                                <td className="flex items-center gap-x-5 col-span-1">
                                                    <button onClick={() => { navigate(`/admin/offers/add/${value.offerId}`) }}><img className="h-6" src={editImg} /></button>
                                                    <button onClick={() => { deleteOffers(value.offerId) }}><img className="h-7" src={deleteImg} /></button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </>
                            :
                                <>
                                
                                </>
                            }
                            
                        </tbody>
                    </table>
                    <button className="bg-gray-400 w-8 h-8 mt-8 text-white hover:bg-gray-700" onClick={() => { navigate("/admin/offers/add") }}>+</button>


                </div>
            </div>
        </div>

    );
}

export default AdminOffers;