import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo - Left side */}
          <div>
            <a href="#" className="flex items-center py-4">
              <span className="font-semibold text-green-500 text-2xl">eStudy</span>
            </a>
          </div>
          
          {/* Primary Nav - Right side */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold">Home</a>
            <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">About</a>
            <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Courses</a>
            <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Review</a>
            <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Contacts</a>
          </div>
          
          {/* Mobile menu button - Right side */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="outline-none mobile-menu-button"
            >
              <svg className="w-6 h-6 text-gray-500 hover:text-green-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <ul className="">
          <li className="active"><a href="#" className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>
          <li><a href="#" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</a></li>
          <li><a href="#" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Courses</a></li>
          <li><a href="#" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Review</a></li>
          <li><a href="#" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contacts</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar