import { ChartArea, PhoneCall } from "lucide-react";
import { useState } from 'react';
import { useSelector} from 'react-redux';
import Link from 'next/link';

const PriceInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOfferOpen, setIsOfferOpen] = useState(false);
  const { selectedEquipment: equipment, error } = useSelector(state => state.equipments);
  const {
    amount,
    pricingschedule,
    negotiable,
    owner: { name, city, phonenumber, email },
    location
} = equipment;
  return (
    <>
      <div className="p-4 bg-white rounded-lg shadow-lg">
        <h3 className="text-xl font-bold">Cost</h3>
        <p className="text-2xl font-semibold mt-2">{amount} NGN <span className="text-sm text-gray-500 ml-2">
                    / {pricingschedule}
                </span></p>
        <p className="text-sm text-gray-600">Negotiable </p>
        <button 
          onClick={() => setIsOfferOpen(true)}
          className="mt-4 w-full bg-gray-500 text-white py-2 rounded-full flex items-center justify-center space-x-2"
        >
          <span>Make an offer</span>
          <PhoneCall size={20} />
        </button>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="mt-4 w-full bg-white border border-dark py-2 rounded-full flex items-center justify-center space-x-2"
        >
          <PhoneCall size={20} />
          <span>Contact Owner</span>
          
        </button>

        <button 
          
          className="mt-2 w-full border border-gray-300 py-2 rounded-full flex items-center justify-center space-x-2"
        >
          <button>
            <Link href="/chat">
            <div className="flex">
            
            <ChartArea size={20} />
            <span>Start a Chat</span>
            </div>
            
            </Link>
          </button>
          
        </button>
      </div>

 
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
           
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="text-center">
              <h2 className="text-xl text-gray-700 mb-4">Contact Owner</h2>
          
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src="/future.jpeg"
                  alt="Owner"
                  className="w-full h-full object-cover"
                />
              </div>

              
              <h3 className="text-lg font-medium text-gray-800 mb-1">
              {name}
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                { location || "Port Harcourt, Rumuola"}
              </p>

             
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Phone number</p>
                  <p className="text-green-600 font-medium">
                  {phonenumber}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Email</p>
                  <p className="text-green-600 font-medium">
                  {email}
                  </p>
                </div>
              </div>

              <button className="w-full mt-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                Start a Chat
                <svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

    {isOfferOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
              
                <button
                  onClick={() => setIsOfferOpen(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <div className="text-center">
                  <h2 className="text-xl text-gray-700 mb-4">Make an offer</h2>
                  <div className="flex">
                  <h3 className="text-lg font-medium text-gray-800 mb-1">
                    {/* {name || "Rental duration"} */}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6">
                    { "End date"}
                  </p> 
                  <p className="text-gray-600 text-sm mb-6">
                    { "Start date"}
                  </p>  
                  </div>    
                </div>
              </div>
            </div>
          )}
    </>
  );
};

export default PriceInfo;