"use client";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEquipments } from '@/redux/reducers/equipmentReducer';
import Link from 'next/link';
import { BsBookmark } from 'react-icons/bs';  


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

];

export default function Card() {
    // const dispatch = useDispatch();
    // const { equipments, loading, error } = useSelector((state) => state.equipments);

    // useEffect(() => {
    //     dispatch(fetchEquipments());
    // }, [dispatch]);

    // if (loading) return <div>Loading...</div>;
    // if (error) return <div>Error: {error}</div>;


    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4 sm:px-6 lg:px-8">
        {cardData.map((card, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden shadow-lg bg-white">
                <Link href={`equipment-detail/${card.slug}`}>
                    <div className="relative">
                        <img 
                            className="w-full h-48 object-cover rounded-t-lg" 
                            src='/future.jpeg' 
                            alt={card.name} 
                        />
                        <button 
                            className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
                            onClick={(e) => {
                                e.preventDefault();
                                // Add bookmark functionality here
                            }}
                        >
                            <BsBookmark className="h-5 w-5 text-gray-700" />
                        </button>
                    </div>
                    
                    <div className="p-4">
                        <div className="flex flex-col space-y-2">
                            <div className="text-2xl sm:text-3xl font-bold text-gray-800">
                                {card.amount}
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
                        </div>
                    </div>
                </Link>
            </div>
        ))}
    </div>
    );
}
