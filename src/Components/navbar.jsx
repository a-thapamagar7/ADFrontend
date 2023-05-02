import React from "react"
import logo from "../Images/logoB.png"
import { useNavigate } from "react-router-dom";

function NavBar(){
    const navigate = useNavigate();
    return(
        <div>
            <nav class="bg-white border-gray-200">
                <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <div class="flex items-center">
                        <img src={logo} class="self-center h-8 text-2xl font-semibold whitespace-nowrap"/>
                    </div>
                    <div class="flex items-center">
                        <ul class="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                            <li>
                                <div onClick={()=>navigate("")} class="text-gray-900 hover:underline" aria-current="page">Home</div>
                            </li>
                            <li>
                                <div onClick={()=>navigate("")} class="text-gray-900 hover:underline">Team</div>
                            </li>
                            <li>
                                <div onClick={()=>navigate("")} class="text-gray-900 hover:underline">Cars</div>
                            </li>
                            <li>
                                <div onClick={()=>navigate("/login")} class="text-gray-900 hover:underline">Login</div>
                            </li>
                            <li>
                                <div onClick={()=>navigate("/register")} class="text-gray-900 hover:underline">Sign Up</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default NavBar