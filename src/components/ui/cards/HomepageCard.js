"use client";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEquipments } from '@/redux/reducers/equipmentReducer';
import Link from 'next/link';
// import { BsBookmark } from 'react-icons/bs';  
import { AlertCircle, RefreshCcw } from 'lucide-react';
import { addToFavorites } from '@/redux/reducers/equipmentReducer';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';
import { Loader2, CheckCircle } from 'lucide-react';

const slugify = (string) => {
    return string
        .toLowerCase()
        .replace(/[^\w\s-]/g, '') // Remove special characters
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/--+/g, '-') 
        .trim();
};

export const cardData = [
    {
        image: "future.jpeg",
        amount: "2,500,000.00",
        duration: "per day",
        name: "Steel Pipelines Cables",
        description: "Lorem ipsum dolor sit amet",
        workingcondition: "Available: Immediately",
        slug: "steel-pipelines-cables"
    },
    {
        image: "future.jpeg",
        amount: "1,800,000.00",
        duration: "per week",
        name: "High-Pressure Valves",
        description: "Consectetur adipiscing elit",
        workingcondition: "Available: In 3 days",
        slug: "high-pressure-valves"
    },
    {
        image: "future.jpeg",
        amount: "2,500,000.00",
        duration: "per day",
        name: "Bulldozer",
        description: "Powerful bulldozer for earthmoving and demolition.",
        workingcondition: "Available: In 2 days",
        slug: "bulldozer"
    },
    {
        image: "future.jpeg",
        amount: "4,000,000.00",
        duration: "per day",
        name: "Crane",
        description: "High-capacity crane for lifting and moving heavy loads.",
        workingcondition: "Available: Immediately",
        slug: "crane"
    },
    {
        image: "future.jpeg",
        amount: "1,200,000.00",
        duration: "per day",
        name: "Forklift",
        description: "Versatile forklift for material handling and warehouse operations.",
        workingcondition: "Available: In 1 day",
        slug: "forklift"
    },
    {
        image: "future.jpeg",
        amount: "2,800,000.00",
        duration: "per day",
        name: "Backhoe Loader",
        description: "Multi-purpose backhoe loader for digging and loading.",
        workingcondition: "Available: Immediately",
        slug: "backhoe-loader"
    },
    {
        image: "future.jpeg",
        amount: "1,500,000.00",
        duration: "per day",
        name: "Compactor",
        description: "Heavy-duty compactor for soil and asphalt compaction.",
        workingcondition: "Available: In 3 days",
        slug: "compactor"
    },
    {
        image: "future.jpeg",
        amount: "3,200,000.00",
        duration: "per day",
        name: "Motor Grader",
        description: "Precision motor grader for road construction and maintenance.",
        workingcondition: "Available: Immediately",
        slug: "motor-grader"
    },

];

export default function Card() {
    const dispatch = useDispatch();
    const { equipments, loading, error } = useSelector((state) => state.equipments);
    const [loadingFavorites, setLoadingFavorites] = useState({});
  const [successFavorites, setSuccessFavorites] = useState({});
  
    const { favorites } = useSelector(state => state.equipments);
 
    


    useEffect(() => {
        dispatch(fetchEquipments());
    }, [dispatch]);

    const {
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm ();
    
    const onSubmit = async (_id) => {
        try {
            setLoadingFavorites(prev => ({ ...prev, [equipmentId]: true }));
      setSuccessFavorites(prev => ({ ...prev, [equipmentId]: false }));
      
      const resultAction = await dispatch(addToFavorites(equipmentId));
      
      if (addToFavorites.fulfilled.match(resultAction)) {
        setSuccessFavorites(prev => ({ ...prev, [equipmentId]: true }));
        toast.success('Added to favorites');
      } else {
        toast.error(resultAction.payload?.message || 'Failed to add to favorites');
      }
    } catch (error) {
      toast.error('Error adding to favorites');
    } finally {
      setLoadingFavorites(prev => ({ ...prev, [equipmentId]: false }));
    }
    }

    if (loading) {
        return (
          <div className="flex flex-col items-center justify-center min-h-[200px] space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#2A2F38]"></div>
            <p className="text-gray-600 text-sm">Loading equipment...</p>
          </div>
        );
      }
      if (error) {
        return (
          <div className="flex flex-col items-center justify-center min-h-[400px] p-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md w-full">
              <div className="flex items-center space-x-3">
                <AlertCircle className="h-6 w-6 text-red-500" />
                <h3 className="text-lg font-medium text-red-800">Error Loading Equipment</h3>
              </div>
              
              <p className="mt-2 text-sm text-red-700">
                {error?.message || 'Something went wrong. Please try again.'}
              </p>
              
              <button
                onClick={() => dispatch(fetchEquipments())}
                className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                <RefreshCcw className="h-4 w-4 mr-2" />
                Try Again
              </button>
            </div>
          </div>
        );
      }


    return (
        <div>
            <h2 className='font-bold text-xl ml-10 px-2 py-3'>Listed Equipments </h2>
       
        <div className="grid grid-cols-1 mx-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4 sm:px-6 lg:px-8">
            
        {equipments.map((card, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden shadow-lg bg-white">
                <Link href={`equipment-detail/${card._id}`}>
                    <div className="relative">
                    <img 
                            className="w-full h-48 object-cover rounded-t-lg" 
                            src={card.coverimage || '/future.jpeg'} // Use coverimage URL with fallback
                            alt={card.name}
                            onError={(e) => {
                                e.target.onerror = null; 
                                e.target.src = '/future.jpeg';
                            }}
                        />
                         <form onSubmit={handleSubmit(() => onSubmit(card._id))}>
                         <button 
              type="submit"
              disabled={loadingFavorites[card._id]}
              className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
              onClick={(e) => e.preventDefault()}
            >
              {loadingFavorites[card._id] ? (
                <Loader2 className="h-5 w-5 animate-spin text-gray-700" />
              ) : successFavorites[card._id] ? (
                <CheckCircle className="h-5 w-5 text-green-500" />
              ) : favorites.some(fav => fav.equipmentId === card._id) ? (
                <BsBookmarkFill className="h-5 w-5 text-yellow-500" />
              ) : (
                <BsBookmark className="h-5 w-5 text-gray-700" />
              )}
            </button>
                </form>
                    </div>
                    
                    <div className="p-4">
                        <div className="flex flex-col space-y-1">
                            <div className="flex justify-between">
                            <div className="text-sm sm:text-sm font-bold text-gray-800">
                                {card.amount}
                            </div>
                            <div className=''>
                                <p>per/day</p>
                            </div>
                            </div>
                            <div className="text-sm text-gray-500">
                                {card.duration}
                            </div>
                            <div className="text-lg sm:text-xl font-semibold text-gray-700">
                                {card.name}
                            </div>
                            <div className="text-sm text-gray-600">
                                {card.description}
                            </div>
                            <div className="text-sm text-gray-600 font-semibold">
                                {card.workingcondition}
                            </div>
                            <div className="text-sm text-gray-600 font-semibold">
                               <p>Avalaibilty: Immediately</p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        ))}
    </div>
    </div>
    );
}
