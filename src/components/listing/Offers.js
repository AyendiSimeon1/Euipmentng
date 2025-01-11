import React from 'react';
import { Trash2, MessageCircle } from 'lucide-react';

export default function EquipmentOffers () {
  const equipment = {
    title: "Steel Pipelines Cables",
    location: "Port Harcourt, Rumukola",
    cost: "20,000,000",
    isNegotiable: true,
    stats: {
      unreadOffers: 2,
      totalOffers: 24
    },
    details: {
      make: "Port Harcourt, Rumukola",
      brand: "Port Harcourt, Rumukola",
      model: "Port Harcourt, Rumukola",
      yearOfManufacture: "Port Harcourt, Rumukola",
    },
    paymentMethod: "Pay On Delivery",
    condition: "Brand New",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu magna rhoncus, dictum est a, mattis felis. Sed sagittis, velit eu tempus accumsan, risus sem tristique lectus, quis ullamcorper tortor libero sed velit.",
    accessories: ["Lights", "Crane hook", "Crane hook", "Crane hook", "Crane hook"],
    certificates: [
      "Certificate of use",
      "Certificate of use",
      "Certificate of use",
      "Certificate of use",
      "Certificate of use"
    ]
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
 
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 bg-yellow-500 rounded-full"></div>
          <button className="px-4 py-1 text-sm bg-gray-200 rounded-full">
            Complete Profile
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2">
            <MessageCircle className="h-6 w-6 text-gray-600" />
          </button>
          <div className="h-8 w-8 bg-gray-300 rounded-full"></div>
        </div>
      </div>


      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="col-span-3">
          <img
            src="/api/placeholder/800/400"
            alt="Equipment main"
            className="w-full h-[400px] object-cover rounded-lg"
          />
        </div>
        <div className="space-y-4">
          {[1, 2, 3].map((index) => (
            <img
              key={index}
              src="/api/placeholder/200/120"
              alt={`Thumbnail ${index}`}
              className="w-full h-[120px] object-cover rounded-lg"
            />
          ))}
        </div>
      </div>

    
      <div className="flex items-center space-x-6 mb-6">
        <div className="flex items-center space-x-2">
          <MessageCircle className="h-5 w-5 text-gray-600" />
          <span className="text-sm text-gray-600">{equipment.stats.unreadOffers} Unread Offers</span>
        </div>
        <div className="flex items-center space-x-2">
          <MessageCircle className="h-5 w-5 text-gray-600" />
          <span className="text-sm text-gray-600">{equipment.stats.totalOffers} Total Offers</span>
        </div>
      </div>

   
      <div className="space-y-2 mb-8">
        <button className="w-full py-2 text-center border border-gray-300 rounded-lg">
          Edit Listing
        </button>
        <button className="w-full py-2 text-center bg-gray-600 text-white rounded-lg">
          Delete Listing
        </button>
      </div>

    
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold mb-1">{equipment.title}</h1>
          <p className="text-gray-600">{equipment.location}</p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <h2 className="font-medium mb-2">Cost</h2>
            <p className="text-2xl font-semibold mb-1">{equipment.cost}</p>
            {equipment.isNegotiable && (
              <span className="text-gray-600">Negotiable</span>
            )}
          </div>
          
          <div>
            <div className="mb-4">
              <h2 className="font-medium mb-2">Payment Method</h2>
              <div className="flex items-center space-x-2">
                <input type="checkbox" checked readOnly className="rounded" />
                <span>Pay On Delivery</span>
              </div>
            </div>
            
            <div>
              <h2 className="font-medium mb-2">Working Condition</h2>
              <div className="flex items-center space-x-2">
                <input type="checkbox" checked readOnly className="rounded" />
                <span>Brand New</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <h2 className="font-medium mb-2">Make</h2>
            <p>{equipment.details.make}</p>
          </div>
          <div>
            <h2 className="font-medium mb-2">Brand</h2>
            <p>{equipment.details.brand}</p>
          </div>
          <div>
            <h2 className="font-medium mb-2">Model</h2>
            <p>{equipment.details.model}</p>
          </div>
          <div>
            <h2 className="font-medium mb-2">Year of Manufacture</h2>
            <p>{equipment.details.yearOfManufacture}</p>
          </div>
        </div>

        <div>
          <h2 className="font-medium mb-2">Description</h2>
          <p className="text-gray-600">{equipment.description}</p>
        </div>

        <div>
          <h2 className="font-medium mb-2">Accessories</h2>
          <div className="flex flex-wrap gap-2">
            {equipment.accessories.map((accessory, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 rounded-full text-sm"
              >
                {accessory}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-medium mb-2">Certificates</h2>
          <div className="space-y-2">
            {equipment.certificates.map((certificate, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <span>{certificate}</span>
                <Trash2 className="h-5 w-5 text-gray-400" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
