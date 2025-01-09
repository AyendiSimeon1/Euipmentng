import React from 'react';

export default function Card() {
    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg p-6">
            <img className="w-full h-48 object-cover rounded-lg" src="future.jpeg" alt="Card Image" />
            <div className='flex justify-between'>
                <div className="text-3xl font-bold text-gray-800 mt-4">
                    2,500,000.00
                </div>
                <div className="text-sm text-gray-500 mt-2">
                    per day
                </div>
            </div>
            <div className="text-xl font-semibold text-gray-700 mt-4">
                Steel Pipelines Cables 
            </div>
            <div className="text-sm text-gray-600 mt-2">
                Lorem ipsum dolor sit amet
            </div>
            <div className="text-sm text-gray-600 font-semibold mt-4">
                Available: Immediately
            </div>
        </div>
    );
}