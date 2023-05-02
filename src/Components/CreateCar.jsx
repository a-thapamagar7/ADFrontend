import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom";
import Footer from "./Footer";
import car from "../Images/car.png"

const CreateCar = () => {
    const wrongError = "text-red-600 text-xs"
    const rightError = "text-green-600 text-xs"
    const navigate = useNavigate()
    const {id} = useParams()
    const [carName, setCarName] = useState("")
    const [image, setImage] = useState("")
    const [brand, setBrand] = useState("")
    const [price, setPrice] = useState("")
    const [condition, setCondition] = useState("")
    const [description, setDescription] = useState("")
    const [numberOfRents, setNumberofRents] = useState("")
    const [createdBy, setCreatedBy] = useState("42f55ca4-e961-4994-a299-029ca9e74af9")
    const [error, setError] = useState([])

    useEffect(() => {
        getIDCars()
    }, [])


    const createCars = async () => {
        const response = await fetch("https://localhost:7256/api/Car/Create", {
            method: "POST",
            //sends the data in json format
            headers: {
                "Content-Type": "application/json"
            },
            //sends the states to the server
            body: JSON.stringify({
                carName,
                image,
                brand,
                price,
                condition,
                description,
                numberOfRents,
                createdBy
            })
        })

        

        const data = await response.json()
        if (data) {

            navigate("/admin/cars")
        } else {
            const newError = { ...error }
            newError.message = "The was an error"
            newError.style = "text-red-700 text-lg"
            setError(newError)
        }
    }
    const editCar = async (userId) => {
        const response = await fetch(`https://localhost:7256/api/Car/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                carName,
                image,
                brand,
                price,
                condition,
                description,
                numberOfRents,
                createdBy
            })
        })
        const answer = await response.json();
        if (response.status == "200") {
            navigate("/admin/cars")
        }
        else {
            const newError = { ...error }
            newError.message = "Please input all the fields"
            newError.style = "text-red-600 text-lg"
            setError(newError)
        }
    }

    const getIDCars = async () => {
        console.log(id)
        const response = await fetch(`https://localhost:7256/api/Car/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const answer = await response.json();
        setCarName(answer.carName)
        setBrand(answer.brand)
        setCondition(answer.condition)
        setCreatedBy(answer.createdBy)
        setDescription(answer.description)
        setImage(answer.image)
        setNumberofRents(answer.numberOfRents)
        setPrice(answer.price)
    }

    const submitCourse = (event) => {
        event.preventDefault()
        if ( !id) {
            createCars()
        }
        else {
            editCar()
        }
       
    }

    return (
        <>
            <div className="px-20">
                <form onSubmit={submitCourse} className="flex flex-col mt-20 gap-y-6">
                    <div className="flex flex-row gap-x-5">
                        <div className="bg-purple-200 w-fit">
                            <div style={{ marginTop: "-22px" }} className="basisblack flex flex-row text-gray-900 text-2xl tracking-tighter ">Add New Car</div>
                        </div>
                        <img style={{ marginTop: "-30px" }} src={car} className="h-12 w-fit"/>
                    </div>
                    <div className="flex flex-col  gap-y-6">
                        <div className="grid basisregular grid-cols-12 items-center">
                            <div className="col-span-2">Name</div>
                            <input value={carName} onChange={(e) => setCarName(e.target.value)} className="border border-black col-span-4 h-8 text-sm px-2 py-4" />
                        </div>

                        <div className="grid basisregular grid-cols-12 items-center">
                            <div className="col-span-2">Image</div>
                            <input value={image} onChange={(e) => setImage(e.target.value)} className="border border-black col-span-4 h-8 text-sm px-2 py-4" />
                        </div>

                        <div className="grid basisregular grid-cols-12 items-center">
                            <div className="col-span-2">Brand</div>
                            <input value={brand} onChange={(e) => setBrand(e.target.value)} className="border border-black col-span-4 h-8 text-sm px-2 py-4" />
                        </div>

                        <div className="grid basisregular grid-cols-12 items-center">
                            <div className="col-span-2">Price</div>
                            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="border border-black col-span-4 h-8 text-sm px-2 py-4" />
                        </div>

                        <div className="grid basisregular grid-cols-12 items-center">
                            <div className="col-span-2">Condition</div>
                            <input value={condition} onChange={(e) => setCondition(e.target.value)} className="border border-black col-span-4 h-8 text-sm px-2 py-4" />
                        </div>

                        <div className="grid basisregular grid-cols-12 items-center">
                            <div className="col-span-2">Number of Rents</div>
                            <input type="number" value={numberOfRents} onChange={(e) => setNumberofRents(e.target.value)} className="border border-black col-span-4 h-8 text-sm px-2 py-4" />
                        </div>

                        <div className="grid grid-cols-12 items-center gap-y-4">
                            <div className="col-span-12">Description</div>
                            <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="border border-black col-span-8 h-40 px-3 py-2" />
                        </div>

                        <div className="flex flex-row gap-x-10">
                            <button type="submit" className="border bg-indigo-600 text-white w-1/12 spacegrotesk h-12">{id? (<>Update</>):(<>Add</>)}</button>
                            <button onClick={()=>navigate("/admin/cars")} className="border bg-indigo-600 text-white w-1/12 spacegrotesk h-12">Cancel</button>
                        </div>
                        
                        <div className={error.style}>{error.message}</div>
                    </div>
                </form>
            </div>
            <Footer />
        </>

    )
}

export default CreateCar;