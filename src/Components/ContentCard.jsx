import tripIMG from "../Images/ski-route.png"

const ContentCard = ({name, image, trips, price}) => {
    
    return (
        <div className="flex infoCard flex-col h-fit w-80 rounded-2xl shadow-2xl col-span-4">
            <div className="w-full h-52 overflow-hidden">
                <img className="rounded-t-xl" src={image}/>
            </div>
            <div className="flex flex-col mt-2 mb-4">
                <div className="basisblack px-4 text-xl">{name}</div>
                <div className="basisregular px-4 text-base ml-1 flex flex-row items-center gap-x-1">
                    <span>{trips}</span>
                    <img className="h-5" src={tripIMG}/>
                </div>
                <hr className="border w-11/12 flex self-center mt-2"/>
                <div className="flex flex-row text-base basisblack justify-end px-4 mt-2">
                    <div>Rs. {price}/day</div>
                </div>
            </div>
        </div>
    );
}
 
export default ContentCard;