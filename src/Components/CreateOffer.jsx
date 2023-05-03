import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom";
import Footer from "./Footer";
import confetti from "../Images/confetti.png"

const CreateOffer = () => {
    const wrongError = "text-red-600 text-xs"
    const rightError = "text-green-600 text-xs"
    const { id } = useParams();
    const navigate = useNavigate()
    const [startDay, setStartDay] = useState("")
    const [endDay, setEndDay] = useState("")
    const [startTime, setStartTime] = useState("")
    const [endTime, setEndTime] = useState("")
    const [type, setType] = useState("")
    const [value, setValue] = useState(0)
    const [offerDescription, setOfferDescription] = useState("")
    const [createdBy] = useState("5fdf4a8b-312b-4630-ade8-8f2a470d43bd")
    const [error, setError] = useState([])

    useEffect(() => {
        getIDOffers()
    }, [])

    function utcToTime(utcTimestamp) {
        const date = new Date(utcTimestamp);
        const hours = date.getUTCHours().toString().padStart(2, '0');
        const minutes = date.getUTCMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
      }

    const getIDOffers = async () => {
        const response = await fetch(`https://localhost:7256/api/Offer/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        
        const answer = await response.json();
        if(answer){
            const utcDateString = new Date(answer.startDate).toISOString();
            const dateOnlyString = utcDateString.substring(0, 10);
            const utcDateString2 = new Date(answer.endDate).toISOString();
            const dateOnlyString2 = utcDateString2.substring(0, 10);
            setStartDay(dateOnlyString)
            setEndDay(dateOnlyString2)
            setStartTime(utcToTime(answer.startDate))
            setEndTime(utcToTime(answer.endDate))
            setType(answer.type)
            setValue(answer.value)
            setOfferDescription(answer.offerDescription)
        }
        
    }

    const editOffer = async (userId) => {
        
        const datetime = new Date(Date.parse(`${startDay}T${startTime}:00.000Z`));
        const startDate = datetime.toISOString();
        const batetime = new Date(Date.parse(`${startDay}T${startTime}:00.000Z`));
        const endDate = batetime.toISOString();
        const response = await fetch(`https://localhost:7256/api/Offer/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                offerId: userId,
                startDate,
                endDate,
                type,
                value,
                offerDescription,
                createdBy
            })
        })
        const answer = await response.json();
        if (response.status == "200") {
            navigate("/admin/offers")
        }
        else {
            const newError = { ...error }
            newError.message = "Please input all the fields"
            newError.style = "text-red-600 text-lg"
            setError(newError)
        }
    }

    

    const createOffer = async () => {
        
        const datetime = new Date(Date.parse(`${startDay}T${startTime}:00.000Z`));
        const startDate = datetime.toISOString();
        const batetime = new Date(Date.parse(`${startDay}T${startTime}:00.000Z`));
        const endDate = batetime.toISOString();
        console.log(
            startDate,
                endDate,
                type,
                value,
                offerDescription,
                createdBy)
        // const response = await fetch("https://localhost:7256/api/Offer", {
        //     method: "POST",
        //     //sends the data in json format
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     //sends the states to the server
        //     body: JSON.stringify({
        //         offerId: 0,
        //         startDate,
        //         endDate,
        //         type,
        //         value,
        //         offerDescription,
        //         createdBy
        //     })
        // })

        // const data = await response.json()
        // if (data) {
        //     navigate("/admin/offers")
        // } else {
        //     const newError = { ...error }
        //     newError.message = "The was an error"
        //     newError.style = "text-red-700 text-lg"
        //     setError(newError)
        // }
    }



    const submitOffer = (event) => {
        event.preventDefault()
        if(!id)
        {
            createOffer()
        }
        else {
            editOffer()
        }

    }

    return (
        <>
            <div className="px-20">
                <form onSubmit={submitOffer} className="flex flex-col mt-20">
                    <div className="flex flex-row gap-x-5">
                        <div className="bg-purple-200 w-fit">
                            <div style={{ marginTop: "-22px" }} className="basisblack flex flex-row text-gray-900 text-2xl tracking-tighter ">Create New Offer</div>
                        </div>
                        <img style={{ marginTop: "-30px" }} src={confetti} className="h-10 w-fit" />
                    </div>
                    <div className="flex flex-col mt-10 gap-y-6">

                        <div className="grid basisregular grid-cols-12 items-center">
                            <div className="col-span-2">Start Date</div>
                            <input type="date" value={startDay} onChange={(e) => setStartDay(e.target.value)} className="border border-black col-span-2 h-8 text-sm px-2 py-4" />
                            <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} className="border border-black col-span-2 h-8 text-sm px-2 py-4" />
                        </div>

                        <div className="grid basisregular grid-cols-12 items-center">
                            <div className="col-span-2">End Date</div>
                            <input type="date" value={endDay} onChange={(e) => setEndDay(e.target.value)} className="border border-black col-span-2 h-8 text-sm px-2 py-4" />
                            <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} className="border border-black col-span-2 h-8 text-sm px-2 py-4" />
                        </div>

                        <div className="grid basisregular grid-cols-12 items-center">
                            <div className="col-span-2">Type</div>
                            <input value={type} onChange={(e) => setType(e.target.value)} className="border border-black col-span-4 h-8 text-sm px-2 py-4" />
                        </div>

                        <div className="grid basisregular grid-cols-12 items-center">
                            <div className="col-span-2">Value</div>
                            <input type="number" value={value} onChange={(e) => setValue(e.target.value)} className="border border-black col-span-4 h-8 text-sm px-2 py-4" />
                        </div>

                        <div className="grid grid-cols-12 items-center gap-y-4">
                            <div className="col-span-12">Description</div>
                            <textarea value={offerDescription} onChange={(e) => setOfferDescription(e.target.value)} className="border border-black col-span-8 h-40 px-3 py-2" />
                        </div>



                        <div className="flex flex-row gap-x-10">
                            <button type="submit" className="border bg-indigo-600 text-white w-1/12 spacegrotesk h-12">{id ? (<>Update</>) : (<>Add</>)}</button>
                            <button onClick={() => navigate("/admin/offers")} className="border bg-indigo-600 text-white w-1/12 spacegrotesk h-12">Cancel</button>
                        </div>

                        <div className={error.style}>{error.message}</div>
                    </div>

                </form>
            </div>
            <Footer />
        </>

    )
}

export default CreateOffer;