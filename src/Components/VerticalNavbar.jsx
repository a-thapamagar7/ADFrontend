import { useEffect, useState } from "react"
import drop from "../Images/drop.png"
import { useNavigate } from "react-router-dom";
import logo from "../Images/logoW.png";

const VerticalNavbar = () => {

    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [showServicesDropdown, setShowServicesDropdown] = useState(false);

    useEffect(()=>{
        if(localStorage.getItem("role") === "User") navigate("/")
    },[])

    return (
        <nav className="sticky top-0 h-screen bg-gray-900 text-white w-3/12 px-6 py-6 shadow spacegrotesk">
            <div className="flex items-center justify-between mb-10">
                <div className="text-2xl font-bold tracking-wide spacegrotesk"><img className="w-24" src={logo}/></div>
                <button className="text-gray-500 mt-4 hover:text-white focus:outline-none focus:text-white" onClick={() => setIsOpen(!isOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                </button>
            </div>
            <div className={`${isOpen ? "block" : "hidden"} space-y-2`}>
                <div onClick={()=>{navigate("/admin/cars")}} className="block py-2.5 px-4 rounded hover:bg-gray-800  cursor-pointer">
                    Cars
                </div>
                <div onClick={()=>{navigate("/admin/offers")}} className="block py-2.5 px-4 rounded hover:bg-gray-800  cursor-pointer">
                    Offers
                </div>
                <div onClick={()=>{navigate("/admin/request")}} className="block py-2.5 px-4 rounded hover:bg-gray-800  cursor-pointer">
                    Requests
                </div>
                <div onClick={()=>{navigate("/admin/questions")}} className="block py-2.5 px-4 rounded hover:bg-gray-800  cursor-pointer">
                    Staff
                </div>
                <div onClick={()=>{navigate("/admin/payments")}} className="block py-2.5 px-4 rounded hover:bg-gray-800  cursor-pointer">
                    Filter
                </div>
                <div className={"block py-2.5 px-4 rounded hover:bg-gray-800 " + `${showServicesDropdown ? 'bg-gray-800' : ''}`} onClick={() => setShowServicesDropdown(!showServicesDropdown)} >
                    
                    <div className="flex flex-row items-center gap-x-2">
                        Transaction
                        <img className="h-3" src={drop}/>
                    </div>
                    {showServicesDropdown && (
                        <div className="bg-gray-800 py-2 rounded mt-1 spacegrotesk">
                            <div onClick={()=>{navigate("/admin/subjects")}}  className="block px-4 py-2 hover:bg-gray-700 cursor-pointer">
                                Damage Requests
                            </div >
                            <div onClick={()=>{navigate("/admin/courses")}}  className="block px-4 py-2 hover:bg-gray-700  cursor-pointer">
                                Damage Forms
                            </div >
                            <div onClick={()=>{navigate("/admin/universities")}}  className="block px-4 py-2 hover:bg-gray-700  cursor-pointer">
                                Users
                            </div>
                        </div>
                    )}
                </div>
                <div  onClick={()=>{navigate("/")}}  className="block py-2.5 px-4 rounded hover:bg-gray-800  cursor-pointer" >
                    Home
                </div>
            </div>
        </nav>
    );
}
 
export default VerticalNavbar;