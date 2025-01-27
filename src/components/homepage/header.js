"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaUserCircle } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import { BookmarkCheckIcon } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 py-4 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link href='/'>
            <span className="text-yellow-500 text-2xl">⚙️</span>
            <span className="text-white font-semibold">Equipment.ng</span>
          </Link>
        </div>

          
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              href="/my-listings"
              className="text-white bg-[#2A2F38] font-medium px-6 py-3 text-lg rounded-full"
            >
              My Listings
            </Link>
            <Link href="/" className="text-white hover:text-gray-300">Home</Link>
            <Link href="/saved-equipments" className="text-white hover:text-gray-300">Saved Equipment</Link>
            <Link href="/login" className="text-white hover:text-gray-300">Login</Link>
            <Link href="/settings" className="text-white hover:text-gray-300">
              <FaUserCircle className="inline-block h-6 w-6" />
            </Link>
          </nav>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isMenuOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <Link href="/my-listings" className="block text-white bg-[#2A2F38] font-medium px-6 py-3 text-lg rounded-full">
              My Listings
            </Link>
            <Link href="/" className="block text-white hover:text-gray-300">Home</Link>
            <Link href="/saved-equipments" className="block text-white hover:text-gray-300">Saved Equipment</Link>
            <Link href="/c" className="block text-white hover:text-gray-300">Contact</Link>
            <Link href="/" className="block text-white hover:text-gray-300">Profile</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;