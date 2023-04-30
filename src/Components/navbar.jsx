import React from "react"
import logo from "../Images/logoB.png"
import { useNavigate } from "react-router-dom";

function NavBar(){
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
                                <a href="#" class="text-gray-900 hover:underline" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" class="text-gray-900 hover:underline">Team</a>
                            </li>
                            <li>
                                <a href="#" class="text-gray-900 hover:underline">Cars</a>
                            </li>
                            <li>
                                <a href="#" class="text-gray-900 hover:underline">Login</a>
                            </li>
                            <li>
                                <a href="#" class="text-gray-900 hover:underline">Sign Up</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default NavBar