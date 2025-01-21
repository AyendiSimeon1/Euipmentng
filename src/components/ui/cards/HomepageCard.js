import React from 'react';
import Link from 'next/link';

export const cardData = [
    {
        image: "future.jpeg",
        price: "2,500,000.00",
        duration: "per day",
        title: "Steel Pipelines Cables",
        description: "Lorem ipsum dolor sit amet",
        availability: "Available: Immediately",
        slug: "steel-pipelines-cables"
    },
    {
        image: "future.jpeg",
        price: "1,800,000.00",
        duration: "per week",
        title: "High-Pressure Valves",
        description: "Consectetur adipiscing elit",
        availability: "Available: In 3 days",
        slug: "high-pressure-valves"
    },

];

export default function Card() {
    return (
        <div className="grid grid-cols-4 gap-4">
        {cardData.map((card, index) => (
            <div key={index} className="max-w-sm rounded-lg overflow-hidden shadow-lg">
                <Link href={`equipment-detail/${card.slug}`}>
                  
                        <img className="w-full h-48 object-cover rounded-lg" src={card.image} alt={card.title} />
                        <div className="p-4">
                            <div className="text-3xl font-bold text-gray-800">{card.price}</div>
                            <div className="text-sm text-gray-500">{card.duration}</div>
                            <div className="text-xl font-semibold text-gray-700 mt-2">{card.title}</div>
                            <div className="text-sm text-gray-600 mt-2">{card.description}</div>
                            <div className="text-sm text-gray-600 font-semibold mt-4">{card.availability}</div>
                        </div>
        
                </Link>
            </div>
        ))}
    </div>
    );
}
