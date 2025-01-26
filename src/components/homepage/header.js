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
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="relative h-8 w-24">
              <Image
                src="/logo.png"
                alt="Equipment.ng Logo"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            <span className="text-white font-bold text-lg ml-2">Equipment.ng</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              href="/my-listings"
              className="text-white bg-[#2A2F38] font-medium px-6 py-3 text-lg rounded-full"
            >
              My Listings
            </Link>
            <Link 
              href="/login"
              className="text-white bg-[#2A2F38] font-medium px-6 py-3 text-lg rounded-full"
            >
              Login
            </Link>
            <button className='bg-[#2A2F38] font-medium px-6 py-3 text-lg rounded-full'>
              <Link href="/saved-equipments">
              <BookmarkCheckIcon className="text-white h-6 w-6" />
              </Link>
            </button>
            <button className='text-white bg-[#2A2F38] font-medium px-3 py-3 text-lg rounded-full'>
              <Link href='/settings'>
              <FaUserCircle className="text-white h-6 w-6 t" />
              </Link>
            </button>
            
            <Link 
              href="/settings"
              className="text-white"
            >
              Complete Profile
            </Link>
            
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <HiX className="h-6 w-6" />
            ) : (
              <HiMenu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 space-y-4">
            <Link 
              to="/saved-equipments"
              className="block text-white bg-[#2A2F38] font-medium px-6 py-3 text-lg rounded-full"
            >
              My Listings
            </Link>
            <Link 
              to="/login"
              className="block text-white bg-[#2A2F38] font-medium px-6 py-3 text-lg rounded-full"
            >
              Login
            </Link>
            <Link 
              to="/settings"
              className="block text-white bg-[#2A2F38] font-medium px-6 py-3 text-lg rounded-full"
            >
              Home
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;