import { useEffect, useState } from "react";
import NavBar from "./navbar";
import ContentCard from "./ContentCard";
import searchIcon from "../Images/search.png";


const UserCars = () => {

    const [car, setCar] = useState([])

    useEffect(()=>{
        getCars()
    },[])

    const getCars = async () => {
        const response = await fetch("https://localhost:7256/api/Car/GetAllCars", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const answer = await response.json();
        setCar(answer)
    }


    return ( 
        <div className="b2 h-screen w-full ">
            <NavBar/>
            <div className="w-full flex flex-col items-center mt-20 gap-y-4 mb-16">
                <div className="basisblack text-xl">Discover HKCR, the country's largest car sharing marketplace</div>
                <div className="freightblack text-6xl">Rent a Car</div>
            </div>
            <div className="flex w-full justify-center mb-28">
                <div className="w-7/12 h-12 rounded-full flex items-center pl-4 border bg-white shadow-slate-200 drop-shadow-xl gap-x-4">
                    <input className="h-5/6 w-11/12 basisregular outline-none px-5 text-base bg-transparent" placeholder="Find your desired vehicle for rent" />
                    <div className="h-full rounded-full w-contain flex justify-end items-center">
                        <img className="h-10" src={searchIcon} />
                    </div>
                </div>
            </div>
            
            <div className="grid grid-cols-12 px-20 gap-y-10">
                {car.map((value, index)=>{
                    return(
                        <ContentCard carId={value.carId} key={index} name={value.carName} brand={value.brand} image={value.image} trips={value.numberOfRents} price={value.price}/>
                    )    
                })}

            </div>
        </div>
     );
}
 
export default UserCars;