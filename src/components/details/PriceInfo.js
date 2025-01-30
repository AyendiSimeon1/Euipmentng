import { ChartArea, PhoneCall } from "lucide-react";
import { X } from "lucide-react";
import { toast, ToastContainer } from 'react-toastify';
import { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useForm } from 'react-hook-form';
import { makeOffer } from "@/redux/reducers/equipmentReducer";
import Link from 'next/link';
const PriceInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOfferOpen, setIsOfferOpen] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const { selectedEquipment: equipment, error } = useSelector(state => state.equipments);
  const {
    _id,
    amount,
    pricingschedule,
    negotiable,
    owner: { name, city, phonenumber, email },
    location
} = equipment;

const onSubmit = async (formData) => {
    try {
      // if (!equipment?._id) {
      //   throw new Error('Equipment ID not found');
      // }
      console.log('The equipment id:', _id)
  
      const offerData = {
        equipmentId: _id, 
        proposedPrice: parseFloat(formData.proposedPrice), 
        currency: formData.currency,
        rentalDuration: {
          startDate: new Date(formData.startDate).toISOString(),
          endDate: new Date(formData.endDate).toISOString()
        },
        message: formData.message
      };
  
      console.log('Submitting offer:', offerData); 
  
      const resultAction = await dispatch(makeOffer(offerData));
  
      if (makeOffer.fulfilled.match(resultAction)) {
        toast.success('Offer submitted successfully');
        // setIsOfferOpen(false);
      } else if (makeOffer.rejected.match(resultAction)) {
        throw new Error(resultAction.payload?.message || 'Failed to submit offer');
      }
    } catch (error) {
      console.error('Submit error:', error); // Debug log
      toast.error(error.message || 'Failed to submit offer');
    }
  };
  return (
    <>
      <div className="p-4 bg-white rounded-lg shadow-lg">
        <h3 className="text-xl font-bold">Cost</h3>
        <p className="text-2xl font-semibold mt-2">{amount} NGN <span className="text-sm text-gray-500 ml-2">
                    / {pricingschedule}
                </span></p>
        <p className="text-sm text-gray-600">Negotiable </p>
        <div 
          onClick={() => setIsOfferOpen(true)}
          className="mt-4 w-full bg-gray-500 text-white py-2 rounded-full flex items-center justify-center space-x-2"
        >
          <span>Make an offer</span>
          <PhoneCall size={20} />
        </div>
        <div 
          onClick={() => setIsModalOpen(true)}
          className="mt-4 w-full bg-white border border-dark py-2 rounded-full flex items-center justify-center space-x-2"
        >
          <PhoneCall size={20} />
          <span>Contact Owner</span>
          
        </div>

        <div 
          
          className="mt-2 w-full border border-gray-300 py-2 rounded-full flex items-center justify-center space-x-2"
        >
          <div>
            <Link href="/chat">
            <div className="flex">
            
            <ChartArea size={20} />
            <span>Start a Chat</span>
            </div>
            
            </Link>
          </div>
          
        </div>
      </div>

 
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
           
            <div
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
            </div>

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

              <div className="w-full mt-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
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
              </div>
            </div>
          </div>
        </div>
      )}

    {isOfferOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
      
              <button
                onClick={() => setIsOfferOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
      
              <div className="text-center mb-6">
                <h2 className="text-xl font-semibold text-gray-700">Make an offer</h2>
              </div>
      
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Proposed Price
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="number"
                      {...register('proposedPrice', { required: true })}
                      className="flex-1 rounded-l-md border border-gray-300 p-2 focus:border-[#2A2F38] focus:ring-[#2A2F38]"
                      placeholder="0.00"
                    />
                    <select
                      {...register('currency')}
                      className="rounded-r-md border border-l-0 border-gray-300 p-2 bg-gray-50 focus:border-[#2A2F38] focus:ring-[#2A2F38]"
                    >
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                      <option value="NGN">NGN</option>
                    </select>
                  </div>
                </div>
      
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Start Date
                    </label>
                    <input
                      type="date"
                      {...register('startDate', { required: true })}
                      className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-[#2A2F38] focus:ring-[#2A2F38]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      End Date
                    </label>
                    <input
                      type="date"
                      {...register('endDate', { required: true })}
                      className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-[#2A2F38] focus:ring-[#2A2F38]"
                    />
                  </div>
                </div>
      
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    {...register('message', { required: true })}
                    rows={4}
                    className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-[#2A2F38] focus:ring-[#2A2F38]"
                    placeholder="I'm interested in renting this equipment..."
                  />
                </div>
      
                <button
                  type="submit"
                  className="w-full bg-[#2A2F38] text-white py-2 px-4 rounded-md hover:bg-[#404756] transition-colors"
                >
                  Submit Offer
                </button>
              </form>
            </div>
          </div>
          )}
    </>
  );
};

export default PriceInfo;