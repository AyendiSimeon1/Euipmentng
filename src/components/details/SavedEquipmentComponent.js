"use client";

import Image from 'next/image';
import EquipmentInfo from './EquipmentInfo';
import { FaCheckCircle } from 'react-icons/fa'; 
import { BookmarkCheckIcon, Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserFavorites, removeFromFavorites } from '@/redux/reducers/equipmentReducer';
import { toast, ToastContainer } from 'react-toastify';
import Layout from "@/components/details/Layout";


export default function SavedEquipmentComponent() {
  const dispatch = useDispatch();
  const { favorites: rawFavorites = [] } = useSelector((state) => state.equipments);
  const [deletingFavorites, setDeletingFavorites] = useState({});
  const { user } = useSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(false);
  

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
      // if (!user?._id) {
      //     toast.error('Please login to view favorites');
      //     return;
      //   }
        const resultAction = await dispatch(fetchUserFavorites());
        
        if (fetchUserFavorites.fulfilled.match(resultAction)) {
          console.log('Favorites loaded:', resultAction.payload);
        } else if (fetchUserFavorites.rejected.match(resultAction)) {
          console.error('Failed to fetch favorites:', resultAction.payload);
          toast.error(resultAction.payload?.message || 'Failed to fetch favorites');
        }
      } catch (error) {
        console.error('Error fetching favorites:', error);
        toast.error('Error fetching favorites');
      } finally {
        setIsLoading(false);
      }
    };

    fetchFavorites();
  }, [dispatch]);
 


  // if (isLoading) {
  //   return (
  //     <Layout>
  //       <div className="flex justify-center items-center min-h-[400px]">
  //         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
  //       </div>
  //     </Layout>
  //   );
  // }

  // if (error) {
  //   return (
  //     <Layout>
  //       <div className="flex justify-center items-center min-h-[400px]">
  //         <div className="text-red-500">{error}</div>
  //       </div>
  //     </Layout>
  //   );
  //}
  const handleRemoveFavorite = async (favoriteId) => {
    try {
      setDeletingFavorites(prev => ({ ...prev, [favoriteId]: true }));
      
      const resultAction = await dispatch(removeFromFavorites(favoriteId));
      
      if (removeFromFavorites.fulfilled.match(resultAction)) {
        toast.success('Removed from favorites');
        // Optionally refresh the favorites list
        dispatch(fetchUserFavorites());
      } else {
        toast.error('Failed to remove from favorites');
      }
    } catch (error) {
      toast.error('Error removing favorite');
    } finally {
      setDeletingFavorites(prev => ({ ...prev, [favoriteId]: false }));
    }
  };

  const favorites = rawFavorites?.favorites || [];
  return (
    <div className="space-y-6">
    <div className='text-center'>
      <h2 className='font-semibold'>Saved Equipments</h2>
      <p className='text-slate text-sm'>Click on the icon to remove saved equipments</p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {favorites.map((item) => (
        <div key={item._id} className="relative bg-white p-4 rounded-lg shadow-lg">
          <button
              onClick={() => handleRemoveFavorite(item._id)}
              disabled={deletingFavorites[item._id]}
              className={`absolute top-4 right-4 p-2 rounded-full transition-colors
                ${deletingFavorites[item._id] 
                  ? 'bg-gray-200 cursor-not-allowed' 
                  : 'bg-gray-100 hover:bg-gray-200'
                }`}
            >
              {deletingFavorites[item._id] ? (
                <Loader2 className="h-5 w-5 text-gray-700 animate-spin" />
              ) : (
                <BookmarkCheckIcon className="h-5 w-5 text-gray-700" />
              )}
            </button>

          <div className="space-y-4">
            <Image 
              src={item.equipmentId.coverimage || '/future.jpeg'} 
              width={300} 
              height={200} 
              className="w-full h-48 rounded-lg object-cover" 
              alt={item.equipmentId.name} 
            />
            
            <div className="space-y-2">
              <h3 className="text-xl font-medium">{item.equipmentId.name}</h3>
              <p className="text-sm text-gray-600">{item.equipmentId.location}</p>
              
              <div>
                <p className="text-gray-600">Cost</p>
                <p className="text-lg font-medium">{item.equipmentId.amount} NGN</p>
                {item.equipmentId.negotiable && (
                  <p className="text-sm text-gray-500">Negotiable</p>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}
