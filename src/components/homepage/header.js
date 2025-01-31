"use client";
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaUserCircle, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { useState, useRef, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated } = useSelector(state => state.auth);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    setIsDropdownOpen(false);
    setIsMenuOpen(false); 
  };


  const navLinks = isAuthenticated ? [
    { href: '/my-listings', label: 'My Listings', className: 'bg-[#2A2F38] font-medium px-6 py-3 text-lg rounded-full' },
    { href: '/', label: 'Home' },
    { href: '/saved-equipments', label: 'Saved Equipment' },
    {
      type: 'dropdown',
      label: <FaUserCircle className="inline-block h-6 w-6" />,
      items: [
        { href: '/settings', label: 'Settings', icon: <FaCog className="h-5 w-5" /> },
        { onClick: handleLogout, label: 'Logout', icon: <FaSignOutAlt className="h-5 w-5" /> }
      ]
    }
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

          <nav className="hidden md:flex items-center space-x-6">
        {navLinks.map((link) => (
          link.type === 'dropdown' ? (
            <div key="user-dropdown" className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-white hover:text-gray-300 focus:outline-none"
              >
                {link.label}
              </button>
              
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  {link.items.map((item, index) => (
                    item.href ? (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        {item.icon}
                        <span className="ml-2">{item.label}</span>
                      </Link>
                    ) : (
                      <button
                        key={index}
                        onClick={item.onClick}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {item.icon}
                        <span className="ml-2">{item.label}</span>
                      </button>
                    )
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link 
              key={link.href}
              href={link.href}
              className={`text-white hover:text-gray-300 ${link.className || ''}`}
            >
              {link.label}
            </Link>
          )
        ))}
      </nav>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isMenuOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-gray-700 rounded-lg p-4 space-y-4 transition-all duration-200 ease-in-out">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block text-white hover:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors ${link.className || ''}`}
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