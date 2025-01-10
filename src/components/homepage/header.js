import Image from 'next/image';
import React from 'react';

const Header = () => {
    return (
        <header className=" bg-secondary  p-4">
            <div className="flex items-center  justify-between">
                <div className=" text-2xl">Equipment.ng</div>
                <div className="flex items-center space-x-4">
                    <button className="bg-primary rounded-full text-yellow-700 px-4 py-2 rounded">Button 1</button>
                    <button className="bg-primary rounded-full text-yellow-700 px-1 py-1 rounded">
                        <Image className='rounded-full' src="/future.jpeg" alt="heart" width={50} height={50} />
                    </button>
                    <div className="text-white text-2xl">👤</div>
                </div>
            </div>
        </header>
    );
};

export default Header;
