import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const AddAdmin = () => {
    const wrongError = "text-red-600 text-xs"
    const rightError = "text-green-600 text-xs"
    const navigate = useNavigate()
    const {id} = useParams()
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState([])

    useEffect(() => {
        getIDAdmin()
    }, [])


    const addAdmin = async () => {
        const response = await fetch("https://localhost:7256/api/authenticate/addAdmin", {
            method: "POST",
            //sends the data in json format
            headers: {
                "Content-Type": "application/json"
            },
            //sends the states to the server
            body: JSON.stringify({
                id,
                userName,
                email,
                phoneNumber,
                password
            })
        })

        const data = await response.json()
        if(data.status = "Success")
        {   
            toast.success(data.message);
            navigate("/staffs");
        }
        else{
            toast.error(data.message);
        }
    }

    const editAdmin = async (userId) => {
        const response = await fetch(`https://localhost:7256/api/Car/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id,
                userName,
                email,
                phoneNumber,
                password
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

    const getIDAdmin = async () => {
        console.log(id)
        const response = await fetch(`https://localhost:7256/api/StaffControllers/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const answer = await response.json();
        setUserName(answer.userName)
        setEmail(answer.email)
        setPhoneNumber(answer.phoneNumber)
        setPassword(answer.password)
    }

    const submitCourse = (event) => {
        event.preventDefault()
        if ( !id) {
            addAdmin()
        }
        else {
            editAdmin()
        }    
    }


    return (
        <>
            <div className="px-20">
                <form onSubmit={submitCourse} className="flex flex-col mt-20 gap-y-6">
                    <div className="flex flex-row gap-x-5">
                        <div className="bg-purple-200 w-fit">
                            <div style={{ marginTop: "-22px" }} className="basisblack flex flex-row text-gray-900 text-2xl tracking-tighter ">Add an Admin</div>
                        </div>
                        {/* <img style={{ marginTop: "-30px" }} src={car} className="h-12 w-fit"/> */}
                    </div>
                    <div className="flex flex-col  gap-y-6">
                        <div className="grid basisregular grid-cols-12 items-center">
                            <div className="col-span-2">Username</div>
                            <input value={userName} onChange={(e) => setUserName(e.target.value)} className="border border-black col-span-4 h-8 text-sm px-2 py-4" />
                        </div>

                        <div className="grid basisregular grid-cols-12 items-center">
                            <div className="col-span-2">Email</div>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border border-black col-span-4 h-8 text-sm px-2 py-4" />
                        </div>

                        <div className="grid basisregular grid-cols-12 items-center">
                            <div className="col-span-2">Phone Number</div>
                            <input type="number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="border border-black col-span-4 h-8 text-sm px-2 py-4" />
                        </div>

                        <div className="grid basisregular grid-cols-12 items-center">
                            <div className="col-span-2">Password</div>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border border-black col-span-4 h-8 text-sm px-2 py-4" />
                        </div>

                        <div className="flex flex-row gap-x-10">
                            <button type="submit" className="border bg-indigo-600 text-white w-1/12 spacegrotesk h-12">{id? (<>Update</>):(<>Add</>)}</button>
                            <button onClick={()=>navigate("/staffs")} className="border bg-indigo-600 text-white w-1/12 spacegrotesk h-12">Cancel</button>
                        </div>                  
                        <div className={error.style}>{error.message}</div>
                    </div>
                </form>
            </div>
        <ToastContainer/>
        </>
    );
}

export default AddAdmin;