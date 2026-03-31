import React from 'react';
import { CiLogout } from 'react-icons/ci';


const Navber = ({ carts }) => {
  return (
    <div className="navbar bg-gray-100 p-3 rounded-xl">
           <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <ul className="p-2">
            <li><a>Products</a></li>
            <li><a>Features</a></li>
            <li><a>Pricing</a></li>
            <li><a>Testimonials</a></li>
            <li><a>FAQ</a></li>
          </ul>
          <ul className='font-semibold text-green-600'>
            <li><a>Get Started</a></li>
          </ul>
          <ul className='font-semibold text-pink-600'>
            <li><a><CiLogout />Logout</a></li>
          </ul>
        </li>
      </ul>
    </div>
      
      <div className="flex-1">
        <a className="btn btn-ghost font-bold text-2xl text-[#9514fA]">
          DigiTools
        </a>
      </div>

      <div className="flex-1 justify-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold">
          <li><a>Product</a></li>
          <li><a>Features</a></li>
          <li><a>Pricing</a></li>
          <li><a>Testimonials</a></li>
          <li><a>FAQ</a></li>
        </ul>
      </div>

      <div className="flex-1 flex justify-end gap-4 items-center">

        {/* Cart */}
        <div className="indicator cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>

          <span className="badge badge-sm indicator-item text-red-700">
            ({carts?.length || 0})
          </span>
        </div>
        <p className='px-4 cursor-pointer hover:bg-gray-300 ml-3 p-2 rounded-xl font-semibold border border-gray-300  hidden lg:flex'>
          Login
        </p>

        {/* Button */}
        <a className="btn rounded-xl bg-gradient-to-r from-[#6A5AF9] to-[#A43BF3] text-white hidden lg:flex">
          Get Started
        </a>

      </div>

    </div>
  );
};

export default Navber;