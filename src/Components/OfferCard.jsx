import { useEffect, useState } from "react"
import travel1 from "../Images/travel1.png"
import travel2 from "../Images/travel2.png"
import travel3 from "../Images/travel3.png"
import travel4 from "../Images/travel4.png"

const OfferCard = () => {
    const [imageUrls] = useState([travel1, travel2, travel3, travel4]);
    const [currentIndex, setCurrentIndex] = useState(0);

    function updateIndex() {
        setCurrentIndex(currentIndex => (currentIndex + 1) % imageUrls.length);
    }

    useEffect(() => {
        const intervalId = setInterval(updateIndex, 1200); // Change image every 5 seconds
        return () => clearInterval(intervalId); // Clean up the interval timer


    }, []);

    return (
        <div className="flex flex-row items-center justify-center gap-x-20 mt-10">
                    <div className="w-4/12 flex flex-col items-center bg-purple-200 overflow-visible" style={{borderRadius: "100%"}}>
                        <img src={imageUrls[currentIndex]} className="object-contain rounded-tl-3xl w-10/12"  style={{marginTop: "-100px"}}/>
                    </div>
                    <div className="flex flex-col justify-start w-5/12">
                        <div className="basisblack text-3xl">Hajur Ko Car Rental</div>
                        <div className="basisregular text-justify mt-4">
                            Hajur Ko Car Rental Service is a reliable car 
                            rental service based in Nepal. With a fleet of well-maintained vehicles 
                            and affordable rates, they offer convenient transportation solutions for 
                            both tourists and locals.
                        </div>
                        <button className="bg-indigo-600 basisbold w-7/12 mt-7 h-12 text-lg text-white">Explore all available cars</button>
                    </div>
                    
        </div>
    );
}
 
export default OfferCard;