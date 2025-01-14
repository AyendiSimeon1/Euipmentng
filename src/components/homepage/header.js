import Image from 'next/image';
import React from 'react';
import { BookMarkedIcon, BookmarkPlus, CircleUserRound  } from 'lucide-react';

export default function Header ()  {
    return (
        <header className="bg-[#2A2F38] px-6 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
            <span className="text-yellow-500 text-2xl">⚙️</span>
            <span className="text-white font-semibold">Equipment.ng</span>
        </div>
        <div className="flex items-center space-x-4">
            <button className="text-white bg-gray-700 px-4 py-1.5 rounded-md text-sm">
                Complete Profile
            </button>
            <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-700 rounded-md flex items-center justify-center">
                    <span className="text-white"><BookmarkPlus /> </span>
                </div>
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm"><CircleUserRound /></span>
                </div>
            </div>
        </div>
    </header>
    );
};

