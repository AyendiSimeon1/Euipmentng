"use client";

import OfferStats from '@/components/MyListings/OfferStats';
import EquipmentDetails from '@/components/MyListings/EquipmentDetails';

export default function EquipmentCard  ({ equipment })  {
  return(
    <div className="flex gap-6 p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
      <div className="w-64 h-48 flex-shrink-0">
        <img
          src="/future.jpeg"
          alt={equipment.title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      
      <div className="flex-grow space-y-3">
        <h3 className="text-lg font-semibold">{equipment.title}</h3>
        <p className="text-sm text-gray-600">{equipment.location}</p>
        
        <OfferStats 
          unreadOffers={equipment.unreadOffers}
          totalOffers={equipment.totalOffers}
        />
        
        <div>
          <div className="font-medium">Cost</div>
          <div className="text-xl font-semibold">{equipment.cost}</div>
          {equipment.isNegotiable && (
            <div className="text-sm text-gray-600">Negotiable</div>
          )}
        </div>
        
        <EquipmentDetails
          make={equipment.make}
          brand={equipment.brand}
          color={equipment.color}
          yearOfManufacture={equipment.yearOfManufacture}
        />
      </div>
    </div>
    )
};