
import Car1 from '../Images/carIMG1.jpg';
import { FaCar, FaGasPump, FaCogs, FaRoad } from 'react-icons/fa';
function Car() {
  return (
    <div className="flex flex-col">
    <div className="w-full">
    <img src={Car1} alt="My Image" className="w-full" />
    </div>
    <div className="flex flex-row mt-12">
   <div className="w-1/2 px-4 mx-44">
        <h1 className="text-4xl font-bold mb-4 F1-bold"> Mercedes-Benz</h1>
        <span className="text-sm text-gray-500 font-thin ">Unlimited speed</span>
        <h3 className="text-xl font-semibold mb-2 mt-4">Description</h3>
        <p className="text-lg font-thin text-justify ">Feel the power beneath your feet every time you accelerate a Mercedes-Benz. Whether it is a coupe, sedan or SUV, there is no shortage of phenomenal performance. Each Mercedes-Benz vehicle is built to exceed expectations. Experience a Mercedes-Benz and enjoy a ride like no other.</p>
        <h3 className="text-xl font-semibold mb-2 mt-4">Features</h3>
        <div className="flex flex-row">
            <div className="w-1/2 text-left">
              <div className="flex flex-row gap-x-3 items-center">
                <FaCar className="text-4xl mb-2" />
                <p className="text-sm font-thin">Powerful Engine</p>
              </div>
            </div>
            <div className="w-1/2 text-left">
              <div className="flex flex-row gap-x-3 items-center">
                <FaGasPump className="text-4xl mb-2" />
                <p className="text-sm font-thin">Fuel Efficient</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="w-1/2 text-left">
              <div className="flex flex-row gap-x-3 items-center">
                <FaCogs className="text-4xl mb-2" />
                <p className="text-sm font-thin ">Automatic Transmission</p>
              </div>
            </div>
            <div className="w-1/2 text-left">
              <div className="flex flex-row gap-x-3 items-center">
                <FaRoad className="text-4xl mb-2" />
                <p className="text-sm font-thin">Smooth Ride</p>
              </div>
            </div>
          </div>
      </div>
   <div className="w-1/2 px-4">
        <h1 className="text-4xl font-bold mb-4">$99.99 / day</h1>
        <a href="/checkout">
  <span className="text-sm text-gray-500 font-thin border-b-2 border-gray-500 cursor-pointer mb-6">$186 total</span>
</a>
<div>
    <label className="text-xl font-thin  text-blue-400 mb-0 mt-4 block">Trip Start</label>
    <div className="flex flex-row items-center w-5/12" >
  <input type='date' className="border border-black-400 rounded-none w-full h-10" />
  <input type='time' className="border border-black-400 rounded-none w-full h-10"/>
  </div>
  </div>
  <label className="text-xl font-thin text-blue-400 mb-0 mt-4 block">Trip End</label>
    <div className="flex flex-row items-center w-5/12">
      <input type='date' className="border border-black-400 rounded-none w-full h-10" />
      <input type='time' className="border border-black-400 rounded-none w-full h-10"/>
    </div>
    <label className="text-xl font-thin text-blue-400 mb-0 mt-4 block">Location</label>
<div className="flex flex-row items-center w-5/12">
  <select className="border border-black-400 rounded-none w-full h-10 ">
    <option value="" selected disabled hidden>Select a location</option>
    <option value="new-york">New York</option>
    <option value="los-angeles">Los Angeles</option>
    <option value="chicago">Chicago</option>
  </select>
</div>
<div className="flex flex-row items-center w-5/12">
<button class="label text-xl font-bold text-blue-400 mb-0 mt-4 block inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full">
  Continue
</button>
</div>
  </div>
</div>


      </div>
    
  );
}

export default Car;
