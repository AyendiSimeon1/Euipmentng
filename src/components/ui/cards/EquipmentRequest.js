import React from 'react';

const EquipmentRequests = () => {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold mb-6">Equipment Requests</h2>

      <div className="space-y-8 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">Johnson and Sons is requesting for</h3>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded-md text-sm">Bid</button>
            </div>
            <img src="/future.jpeg" alt="Bulldozer" className="w-full h-48 object-cover mb-4" />
            <div className="space-y-2">
              <p><span className="font-medium">Equipment:</span> Bulldozers</p>
              <p><span className="font-medium">Budget:</span> $20,000,000 per day</p>
              <p><span className="font-medium">Intended Use:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p><span className="font-medium">Location:</span> Port Harcourt, Rumuola</p>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">Johnson and Sons is requesting for</h3>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded-md text-sm">Bid</button>
            </div>
            <img src="/future.jpeg" alt="Bulldozer" className="w-full h-48 object-cover mb-4" />
            <div className="space-y-2">
              <p><span className="font-medium">Equipment:</span> Bulldozers</p>
              <p><span className="font-medium">Budget:</span> $20,000,000 per day</p>
              <p><span className="font-medium">Intended Use:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p><span className="font-medium">Location:</span> Port Harcourt, Rumuola</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-right">
        <a href="/see-more" className="text-gray-600 hover:text-gray-800">
          See more
        </a>
      </div>
    </div>
  );
};

export default EquipmentRequests;