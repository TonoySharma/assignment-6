import React from 'react';
import userIcon from "../../assets/user.png";
import packageIcon from "../../assets/package.png";
import rocketIcon from "../../assets/rocket.png";
import vectorIcon from "../../assets/Vector.png";

const GetStarted = () => {
  return (
    <div className='mb-10'>
      
      {/* Heading */}
      <div className='mt-36 text-center space-y-3'>
        <h1 className='font-bold text-5xl'>Get Started in 3 Steps</h1>
        <p className='text-[#627382]'>
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      {/* Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto mt-10 '>
        
        {/* Card 1 */}
        <div className='border border-gray-300 shadow p-6 rounded-xl bg-gray-100 hover:shadow-lg transition'>
          <div className='flex justify-end '>
            <p className='font-bold px-3 py-1 rounded-full bg-[#9514FA] text-white'>01</p>
          </div>

          <div className='flex justify-center my-4'>
            <img src={userIcon} alt="user" className='w-12 h-12' />
          </div>

          <div className='text-center'>
            <h2 className='mb-3 font-bold text-2xl'>Create Account</h2>
            <p className='text-[#627382]'>
              Sign up for free in seconds. No credit card<br></br> required to get started.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className='border border-gray-300 shadow p-6 rounded-xl bg-gray-100 hover:shadow-lg transition'>
          <div className='flex justify-end'>
            <p className='font-bold px-3 py-1 rounded-full bg-[#9514FA] text-white'>02</p>
          </div>

          <div className='flex justify-center my-4'>
            <img src={packageIcon} alt="user" className='w-12 h-12' />
          </div>

          <div className='text-center'>
            <h2 className='mb-3 font-bold text-2xl'>Choose Products</h2>
            <p className='text-[#627382]'>
              Browse our catalog and select the tools <br></br>that fit your needs.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className='border border-gray-300 shadow p-6 rounded-xl bg-gray-100 hover:shadow-lg transition'>
          <div className='flex justify-end'>
            <p className='font-bold px-3 py-1 rounded-full bg-[#9514FA] text-white'>03</p>
          </div>

          <div className='flex justify-center my-4'>
            <img src={rocketIcon} alt="user" className='w-12 h-12' />
          </div>

          <div className='text-center'>
            <h2 className='mb-3 font-bold text-2xl'>Start Creating</h2>
            <p className='text-[#627382]'>
              Download and start using your premium <br></br>tools immediately.
            </p>
          </div>
        </div>
      </div>

      {/* Simple, Transparent Pricing */}
       <div className='container mx-auto mt-36'>
          <div className='space-y-3 text-center mb-8'>
            <h1 className='font-bold text-5xl'>Simple, Transparent Pricing</h1>
            <p className='text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
          </div>

       {/* card */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto'>

   {/* card 1*/}
     <div className='border p-6 rounded-xl border-gray-300 shadow hover:shadow-lg transition bg-gray-100'>
    
    {/* Title */}
    <h1 className='font-bold text-2xl'>Starter</h1>
    <p className='text-[#627382] mt-2'>Perfect for getting started</p>

    {/* Price */}
    <div className='flex items-end gap-1 mt-6'>
      <h2 className='font-bold text-4xl'>$0</h2>
      <p className='text-[#627382]'>/month</p>
    </div>

    {/* Features */}
    <div className='mt-8 space-y-3'>
      {[
        "Access to 10 free tools",
        "Basic templates",
        "1 project per month",
        "Community support"
      ].map((item, id) => (
        <div key={id} className='flex items-center gap-2'>
          <img src={vectorIcon} alt="" className='w-4 h-4' />
          <p className='text-[#627382]'>{item}</p>
        </div>
      ))}
    </div>

    {/* Button */}
    <button className='btn btn-outline w-full mt-8 rounded-full text-white bg-[#9514FA]'>
      Get Started Free
    </button>

   </div>
   {/* card 2 */}
     <div className='border p-6 rounded-xl border-gray-300 shadow hover:shadow-lg transition bg-[#9514FA] text-white'>
         <div className='text-center justify-center flex -mt-10'>
            <p className='text-red-500 bg-[#FEF3C6] w-fit py-1 px-3 rounded-full'>Most Popular</p>
          </div>
    {/* Title */}
    <h1 className='font-bold text-2xl'>Pro</h1>
    <p className='text-white mt-2'>Best for professionals</p>

    {/* Price */}
    <div className='flex items-end gap-1 mt-6'>
      <h2 className='font-bold text-4xl'>$29</h2>
      <p className='text-white'>/month</p>
    </div>

    {/* Features */}
    <div className='mt-8 space-y-3'>
      {[
        "Access to all premium tools",
        "Unlimited templates",
        "Priority support",
        "Unlimited projects",
        "Cloud sync",
        "advance analytics"
      ].map((item, id) => (
        <div key={id} className='flex items-center gap-2'>
          <img src={vectorIcon} alt="" className='w-4 h-4 bg-white rounded-full' />
          <p className='text-white'>{item}</p>
        </div>
      ))}
    </div>

    {/* Button */}
    <button className='btn btn-outline w-full mt-8 rounded-full bg-white text-[#9514FA]'>
      Start Pro Trial
    </button>

   </div>
   {/* card 3 */}
     <div className='border p-6 rounded-xl border-gray-300 shadow hover:shadow-lg transition bg-gray-100'>
    
    {/* Title */}
    <h1 className='font-bold text-2xl'>Starter</h1>
    <p className='text-[#627382] mt-2'>Perfect for getting started</p>

    {/* Price */}
    <div className='flex items-end gap-1 mt-6'>
      <h2 className='font-bold text-4xl'>$99</h2>
      <p className='text-[#627382]'>/month</p>
    </div>

    {/* Features */}
    <div className='mt-8 space-y-3'>
      {[
        "Everything in Pro",
        "Team collaboration",
        "Custom integration",
        "Dedicated support",
        "SLA guarantee",
        "Custom branding"
      ].map((item, id) => (
        <div key={id} className='flex items-center gap-2'>
          <img src={vectorIcon} alt="" className='w-4 h-4' />
          <p className='text-[#627382]'>{item}</p>
        </div>
      ))}
    </div>

    {/* Button */}
    <button className='btn btn-outline w-full mt-8 rounded-full bg-[#9514FA] text-white'>
     Contact Sales
    </button>

   </div>

 </div>
       </div>
    </div>
  );
};

export default GetStarted;