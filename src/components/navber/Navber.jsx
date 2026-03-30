import React from 'react';

const Navber = () => {
    return (
       <div className="navbar container mx-auto bg-gray-100 p-3 rounded-2xl">

  <div className="flex-1">
    <a className="btn btn-ghost font-bold text-2xl text-[#9514fA]">DigiTools</a>
  </div>

  {/* CENTER */}
  <div className="flex-1 flex justify-center">
    <ul className="menu menu-horizontal px-1">
      <li><a>Product</a></li>
      <li><a>Features</a></li>
      <li><a>Pricing</a></li>
      <li><a>Testimonials</a></li>
      <li><a>FAQ</a></li>
    </ul>
  </div>

  <div className="flex-1 flex justify-end gap-4 items-center">
    <div className="indicator cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      <span className="badge badge-sm indicator-item">0</span>
    </div>

    <p className='px-4 cursor-pointer hover:bg-gray-300 p-2 rounded'>Login</p>

    <a className="btn rounded-2xl bg-[#4f39f6] text-white hover:bg-blue-800">Get Started</a>
  </div>

</div>
    );
};

export default Navber;
