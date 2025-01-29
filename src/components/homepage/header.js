"use client";
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { FaUserCircle } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated } = useSelector(state => state.auth);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = isAuthenticated ? [
    { href: '/my-listings', label: 'My Listings', className: 'bg-[#2A2F38] font-medium px-6 py-3 text-lg rounded-full' },
    { href: '/', label: 'Home' },
    { href: '/saved-equipments', label: 'Saved Equipment' },
    { href: '/settings', label: <FaUserCircle className="inline-block h-6 w-6" /> }
  ] : [
    { href: '/login', label: 'Login' }
  ];

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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                className={`text-white hover:text-gray-300 ${link.className || ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isMenuOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block text-white hover:text-gray-300 ${link.className || ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;