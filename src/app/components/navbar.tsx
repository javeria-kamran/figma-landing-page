import React from 'react';
import { FaHeart, FaUser, FaShoppingCart, FaSearch } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-[#b1a17f]">
      {/* Logo */}
      <div className="flex items-center text-white text-3xl font-bold ">
        <span className="font-[serif] inline text-5xl ml-16"><b>P</b>urity</span>
      </div>

      {/* Search Bar */}
      <div className="flex items-center w-full max-w-md bg-white rounded-full px-4 py-2 mx-4mr-10 ">
        <input
          type="text"
          placeholder="Search for Gold Jewellery, Diamond Jewellery and more..."
          className="w-full bg-transparent outline-none text-gray-600 "
        /> 
        <FaSearch className="text-gray-500  " />
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-4 text-white text-xl mr-16">
        <FaHeart />
        <FaUser />
        <FaShoppingCart />
      </div>
    </nav>
  );
};

export default Navbar;
