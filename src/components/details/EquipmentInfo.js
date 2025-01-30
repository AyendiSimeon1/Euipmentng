import { MapPin, PenToolIcon, Box, Truck } from 'lucide-react';

export default function EquipmentInfo({ equipment }) {
    return (
        <div className="bg-gray-400 rounded-lg p-4 sm:p-6 mt-5">
            <h2 className="text-xl font-semibold mb-6 text-gray-100">Equipment Details</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {/* Make */}
                <div className="bg-gray-800 p-4 rounded-lg hover:bg-gray-500 transition-colors">
                    <div className="flex items-center space-x-3 mb-2">
                        <Truck className="h-5 w-5 text-gray-400" />
                        <p className="font-medium text-gray-200">Make</p>
                    </div>
                    <p className="text-gray-400 pl-8">Auto Bold</p>
                </div>

                {/* Model */}
                <div className="bg-gray-500 p-4 rounded-lg hover:bg-gray-700 transition-colors">
                    <div className="flex items-center space-x-3 mb-2">
                        <Box className="h-5 w-5 text-gray-400" />
                        <p className="font-medium text-gray-200">Model</p>
                    </div>
                    <p className="text-gray-400 pl-8">{equipment.model}</p>
                </div>

                {/* Location */}
                <div className="bg-gray-500 p-4 rounded-lg hover:bg-gray-700 transition-colors">
                    <div className="flex items-center space-x-3 mb-2">
                        <MapPin className="h-5 w-5 text-gray-400" />
                        <p className="font-medium text-gray-200">Location</p>
                    </div>
                    <p className="text-gray-400 pl-8">{equipment.location}</p>
                </div>

                {/* Working Condition */}
                <div className="bg-gray-500 p-4 rounded-lg hover:bg-gray-700 transition-colors">
                    <div className="flex items-center space-x-3 mb-2">
                        <PenToolIcon className="h-5 w-5 text-gray-400" />
                        <p className="font-medium text-gray-200">Condition</p>
                    </div>
                    <p className="pl-8">
                        {equipment.workingcondition ? (
                            <span className="text-green-400">New</span>
                        ) : (
                            <span className="text-blue-400">Used</span>
                        )}
                    </p>
                </div>
            </div>
            <h2 className='text-xl text-white p-3'>Description</h2>
            <div className="bg-gray-800 p-4 sm:p-6 mt-4 rounded-lg hover:bg-gray-700 transition-colors">
        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          {equipment.description}
        </p>
      </div>
        </div>
    );
}