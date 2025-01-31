"use client";

import Header from "@/components/homepage/header";
import { useState, useEffect }  from 'react';
import EquipmentCard from '@/components/MyListings/EquipmentCard';
import Footer from '@/components/homepage/footer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserListedEquipment, selectUserListedEquipment } from "@/redux/reducers/equipmentReducer";
const ListingsPage = () => {
  const dispatch = useDispatch();
  const { userListedEquipment: listings, loading } = useSelector(selectUserListedEquipment);

  useEffect(() => {
    dispatch(fetchUserListedEquipment());
  }, [dispatch]);
  
    
  console.log('The listing data:', listings);
    return (
      <div>
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <div className="max-w-5xl mx-auto py-8">
          <h1 className="text-2xl font-semibold mb-6 px-4">My Listings</h1>
          
          <div className="space-y-4">
            {listings.map((equipment) => (
              <EquipmentCard key={equipment.id} equipment={equipment} />
            ))}
          </div>
         
        </div>
      </div>
      <Footer />
      </div>
    );
  };
  
  export default ListingsPage;