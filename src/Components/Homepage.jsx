import carIMG from "../Images/carIMG.jpg"
import carIMG1 from "../Images/carIMG1.jpg";
import carIMG2 from "../Images/carIMG2.jpg";
import searchIcon from "../Images/search.png";
import car1 from "../Images/car1.jpg";
import car2 from "../Images/car2.jpg";
import car3 from "../Images/car3.jpg";
import carGroup from "../Images/carGroup1.jpg";
import ContentCard from "./ContentCard";
import OfferCard from "./OfferCard";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import NavBar from "./navbar";
import { useNavigate } from "react-router-dom";

const Homepage = () => {

    const navigate = useNavigate()
    const [offer, setOffer] = useState([]);
    const [offerIndex, setOfferIndex] = useState(0);

    useEffect(() =>{
        getOffers()
    })

    const getOffers = async () => {
        const response = await fetch("https://localhost:7256/api/Offer", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const answer = await response.json();
        setOffer(answer)
    }

    const Increase = () => {
        let newIndex = offerIndex;
        newIndex++
        if(newIndex >= offer.length)
        {
            newIndex = 0
        }
        console.log(newIndex)
        setOfferIndex(newIndex)
    }

    const Decrease = () => {
        let newIndex = offerIndex;
        newIndex--
        if(newIndex <= 0)
        {
            newIndex = offer.length-1
        }
        console.log(newIndex)
        setOfferIndex(newIndex)
    }

    return (
        <>
            <NavBar/>
            <div className="w-full flex flex-col gap-y-16">
                
                <div style={{ backgroundImage: `url(${carIMG})`}} src={carIMG} className="w-full h-96 bg-cover pt-5 flex justify-center">
                    <div className="w-6/12 h-10 rounded-full flex items-center pl-4 bg-slate-100 gap-x-4">
                        <input className="h-5/6 w-11/12 basisregular outline-none px-5 text-base bg-transparent" placeholder="Find your desired vehicle for rent" />
                        <div className="h-full rounded-full w-contain flex justify-end items-center">
                            <img className="h-9" src={searchIcon} />
                        </div>
                    </div>

                </div>

                <div className="w-full flex flex-col items-center gap-y-2 mb-10">
                    <div className="freightblack font-bold" style={{ fontSize: "88px" }}>Find your ride</div>
                    <div className="bg-purple-100 flex justify-center w-7/12 h-8">
                        <div className="basisregular font-black text-3xl" style={{ marginTop: "-18px" }}>Explore the nepal's largest car sharing marketplace</div>
                    </div>

                </div>

                <div className="w-full flex flex-col items-start px-28 gap-y-7">
                    <div className=" flex flex-row gap-x-2 h-7 w-full">
                        <div className="flex flex-row justify-between w-full">
                            <div className="bg-purple-100 basisregular font-bold text-xl h-4 w-fit flex self-end justify-between">
                                <div style={{ marginTop: "-18px" }}>Browse our vehicles</div>
                            </div>
                            <div onClick={()=>{navigate("/cars")}} className="items-end basisregular hover:underline cursor-pointer">View All</div>
                        </div>

                    </div>
                    <div className="grid grid-cols-12 gap-x-10">
                        <ContentCard image={car1} name={"Jeep Wrangler 2015"} trips={"17 trips"} price={"450"} />
                        <ContentCard image={car2} name={"Car Model 2010"} trips={"17 trips"} price={"450"} />
                        <ContentCard image={car3} name={"Honda Maruti 2016"} trips={"17 trips"} price={"450"} />
                    </div>

                </div>
                <div className="flex flex-row items-center justify-center mt-28 h-80 w-full gap-x-20" style={{ backgroundColor: "#fbf9f6" }}>
                    <div className="flex flex-col justify-start w-5/12">
                        <div className="basisblack text-3xl">Hajur Ko Car Rental</div>
                        <div className="basisregular text-justify mt-4">
                            Hajur Ko Car Rental Service is a reliable car
                            rental service based in Nepal. With a fleet of well-maintained vehicles
                            and affordable rates, they offer convenient transportation solutions for
                            both tourists and locals.
                        </div>
                        <button onClick={()=>{navigate("/cars")}} className="bg-indigo-600 basisbold w-7/12 mt-7 h-12 text-lg text-white">Explore all available cars</button>
                    </div>
                    <div className="w-4/12 ">
                        <img src={carGroup} className="object-contain rounded-tl-3xl" />
                    </div>
                </div>
                <div className="flex flex-col mt-28 w-full items-center gap-y-20">
                    <div data={{}} className="bg-purple-200 basisregular font-bold text-5xl w-fit flex ">
                        <div style={{ marginTop: "-28px" }}>Exciting Offers</div>
                    </div>
                    {offer.length > 0? 
                        <>
                            <OfferCard  data={offer[offerIndex]} increase={Increase} decrease={Decrease} />
                        </>
                    :   
                        <></>}
                    

                </div>
                <Footer />
            </div>
        </>
        
    );
}

export default Homepage;