import Image from 'next/image';
import EquipmentInfo from './EquipmentInfo';
import { FaCheckCircle } from 'react-icons/fa'; 
export default function SavedEquipmentComponent({ savedItems }) {
  return (
    <div className="space-y-6">
      {savedItems.map((item, index) => (
        <div key={index} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-lg">
          <div className="flex items-center">
            <Image 
              src={item.image} 
              width={300} 
              height={300} 
              className="rounded-lg object-cover" 
              alt={item.title} 
            />
            <div className="ml-4">
              <h2 className="text-xl font-medium">{item.title}</h2>
              <p className="text-sm text-gray-600">{item.location}</p>
              <br />
              <h2 className="text-xl text-gray-600">Cost</h2>
              <h2 className="text-lg font-medium mt-2">{item.cost.toLocaleString()} NGN</h2>
              <p className="text-sm text-gray-500">Negotiable</p>
              <EquipmentInfo make='202' year='200' location='port harcut' brand='model' color='pin' />
            </div>
          </div>
          <FaCheckCircle className="text-green-500 text-2xl" /> {/* Icon at the flex end */}
        </div>
      ))}
    </div>
  );
}
