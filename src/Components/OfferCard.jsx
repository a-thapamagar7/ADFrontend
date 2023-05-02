import { useEffect, useState } from "react"
import travel1 from "../Images/travel1.png"
import travel2 from "../Images/travel2.png"
import travel3 from "../Images/travel3.png"
import travel4 from "../Images/travel4.png"
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const OfferCard = ({data, increase, decrease}) => {
    const [imageUrls] = useState([travel1, travel2, travel3, travel4]);
    const [currentIndex, setCurrentIndex] = useState(0);
    

    function updateIndex() {
        setCurrentIndex(currentIndex => (currentIndex + 1) % imageUrls.length);
    }

    const ToNormalDate = (date) => {
        const options = { 
          day: 'numeric', 
          month: 'long', 
          year: 'numeric', 
          hour: 'numeric', 
          minute: 'numeric', 
          hour12: true, 
        };
        const dateString = new Date(date).toLocaleString('en-US', options);
        return dateString
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
            {data?
                <>
                   
                    <div className="flex flex-col justify-start w-5/12 gap-y-1">
                        <div className="basisblack text-2xl">{data.value? (data.value + "% ") : ""}{data.type} !!!</div>
                        <div className="basisregular text-sm">{ToNormalDate(data.startDate)} - {ToNormalDate(data.endDate)}</div>
                        <div className="basisregular text-justify mt-4">
                            {data.offerDescription}
                        </div>
                        <div className="w-2/12 flex justify-between mt-4">
                            <div onClick={() => {decrease()}} className="text-lg hover:text-black cursor-pointer text-gray-400 border px-2 py-1 drop-shadow  font-bold">{"<"}</div>
                            <div onClick={() => {increase()}} className="text-lg hover:text-black cursor-pointer text-gray-400 border px-2 py-1 drop-shadow font-bold">{">"}</div>
                        </div>
                    </div>
                </>
                :<></>}
            <ToastContainer/>        
        </div>
    );
}
 
export default OfferCard;