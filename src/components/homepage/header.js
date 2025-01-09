import React from 'react';

const Header = () => {
    return (
        <header className=" p-4">
            <div className="flex items-center text-secondary justify-between">
                <div className=" text-2xl">Equipment.ng</div>
                <div className="flex items-center space-x-4">
                    <button className="bg-white text-yellow-700 px-4 py-2 rounded">Button 1</button>
                    <button className="bg-white text-yellow-700 px-4 py-2 rounded">Button 2</button>
                    <div className="text-white text-2xl">👤</div>
                </div>
            </div>
        </header>
    );
};

export default Header;
