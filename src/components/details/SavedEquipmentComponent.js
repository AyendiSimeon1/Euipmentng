import Image from 'next/image';
import EquipmentInfo from './EquipmentInfo';
import { FaCheckCircle } from 'react-icons/fa'; 
import { BookmarkCheckIcon } from 'lucide-react';
export default function SavedEquipmentComponent({ savedItems }) {
  return (
    <div className="space-y-6 ">
      <div className='text-center'>
        <h2 className='font-semibold'>Saved Equipments</h2>
        <p className='text-slate text-sm'>Click on the icon to remove saved equipments</p>
      </div>
      {savedItems.map((item, index) => (
        <div key={index} className="relative bg-white p-4 rounded-lg shadow-lg">
        
        <div className='bg-gray-400 rounded-full p-5 absolute top-2 right-2 m-4'>
        <BookmarkCheckIcon className="absolute top-2 right-2 text-gray-500 text-xl" />
        </div>
        
        
          <div className="flex items-center">
            <Image 
              src={item.image} 
              width={300} 
              height={300} 
              className="rounded-lg object-cover" 
              alt={item.title} 
            />
            <div className="ml-4 ">
              <h2 className="text-xl font-medium mt-4">{item.title}</h2>
              <p className="text-sm text-gray-600">{item.location}</p>
              <br />
              <h2 className="text-xl text-gray-600">Cost</h2>
              <h2 className="text-lg font-medium mt-2">{item.cost.toLocaleString()} NGN</h2>
              <p className="text-sm text-gray-500">Negotiable</p>
              {/* <EquipmentInfo make='202' year='200' location='port harcut' color='pin' /> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
