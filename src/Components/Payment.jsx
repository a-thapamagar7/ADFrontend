import COD from './Images/Cod.jpg';
import Khalti from './Images/Khalti.png';
function Payment() {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[800px] h-[650px] ">
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-center mb-4">How would you like to pay?</h1>
          <div className="flex justify-between">
            <div className="flex flex-col items-center">
              <button>
              <img src={COD}alt="cash on delivery" className="w-32 h-32 mb-2 mt-[25px]"/>
              <span className="font-semibold text-lg">Cash on Delivery</span>
              </button>
            </div>
            <div className="flex flex-col items-center">\
            <button>
              <img src={Khalti} alt="khalti" className="w-[120px] h-[50px] mt-[40px] mb-[47px]"/>
              <span className="font-semibold text-lg">Khalti Payment</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;

