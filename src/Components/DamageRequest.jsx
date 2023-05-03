import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom";
import Footer from "./Footer";
import car from "../Images/car.png"

const DamageRequest = () => {
    const wrongError = "text-red-600 text-xs"
    const rightError = "text-green-600 text-xs"
    const navigate = useNavigate()
    const { id } = useParams()
    const [DamageDescription, setDamageDescription] = useState("")
    const [date, setDate] = useState("")
    const [userId, setUserId] = useState("d7ff7ebc-ede7-4ade-ac39-239af4f67bd9")
    const [error, setError] = useState([])

    useEffect(() => {
        const now = new Date();
        const utcString = now.toISOString();
        setDate(utcString);
    }, [])


    const createRequest = async () => {
        console.log(
            userId,
            id,
            date,
            DamageDescription
        )
        const response = await fetch("https://localhost:7256/api/DamageRequest/Create", {
            method: "POST",
            //sends the data in json format
            headers: {
                "Content-Type": "application/json"
            },
            //sends the states to the server
            body: JSON.stringify({
                userId,
                carId: id,
                date,
                description: DamageDescription
            })
        })
        console.log(response)
        if (response.status == "200") {
            navigate("/admin/cars")
        } else {
            const newError = { ...error }
            newError.message = "The was an error"
            newError.style = "text-red-700 text-lg"
            setError(newError)
        }
    }

    const JustSubmit = (e) => {
        e.preventDefault()
        createRequest()
    }

    return (
        <>
            <div className="px-20">
                <form onSubmit={(e) => { JustSubmit(e) }} className="flex flex-col mt-20 gap-y-6">
                    <div className="flex flex-row gap-x-5">
                        <div className="bg-purple-200 w-fit">
                            <div style={{ marginTop: "-22px" }} className="basisblack flex flex-row text-gray-900 text-2xl tracking-tighter ">Damage Request Form</div>
                        </div>
                    </div>
                    <div className="flex flex-col  gap-y-6">
                        <div className="grid basisregular grid-cols-12 items-center">
                            <div className="col-span-2">Date</div>
                            <div className="col-span-4">{new Date(date).toLocaleString()}</div>
                        </div>
                        <div className="grid basisregular grid-cols-12 items-center">
                            <div className="col-span-2">Car ID</div>
                            <div className="col-span-4">{id}</div>
                        </div>
                        <div className="grid basisregular grid-cols-12 items-center">
                            <div className="col-span-12">Damage Description</div>
                            <textarea value={DamageDescription} onChange={(e) => setDamageDescription(e.target.value)} className="border border-black col-span-4 h-24 text-sm px-2 py-4" />
                        </div>
                        <div className="flex flex-row gap-x-10">
                            <button type="submit" className="border bg-indigo-600 text-white w-1/12 spacegrotesk h-12">{"Send"}</button>
                            <button onClick={() => navigate("/admin/cars")} className="border bg-indigo-600 text-white w-1/12 spacegrotesk h-12">Cancel</button>
                        </div>

                        <div className={error.style}>{error.message}</div>
                    </div>
                </form>
            </div>
            <Footer />
        </>

    )
}

export default DamageRequest;