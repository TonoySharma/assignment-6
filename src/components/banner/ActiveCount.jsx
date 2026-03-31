import React from 'react';

const ActiveCount = () => {
  return (
   <div>
      <div className='bg-[#9514FA] py-10 flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16 text-white mt-20 px-4'>
      
      {/* Active Users */}
      <div className='text-center'>
        <h1 className='font-bold text-3xl sm:text-4xl lg:text-5xl'>50K+</h1>
        <p className='text-base sm:text-lg'>Active Users</p>
      </div>

      <div className='hidden md:block w-[2px] h-16 bg-white'></div>

      <div className='text-center'>
        <h1 className='font-bold text-3xl sm:text-4xl lg:text-5xl'>200+</h1>
        <p className='text-base sm:text-lg'>Premium Tools</p>
      </div>

      <div className='hidden md:block w-[2px] h-16 bg-white'></div>

      <div className='text-center'>
        <h1 className='font-bold text-3xl sm:text-4xl lg:text-5xl'>4.9</h1>
        <p className='text-base sm:text-lg'>Rating</p>
      </div>

    </div>

      {/* Heading Section */}
       <div className='text-center px-4'>
          <h1 className='font-bold text-3xl sm:text-4xl lg:text-5xl mt-20'>
            Premium Digital Tools
          </h1>

          <p className='text-[#627382] mt-3 text-sm sm:text-base'>
            Choose from our curated collection of premium digital products designed  
            <br className='hidden sm:block'/>
            to boost your productivity and creativity.
          </p>
      </div>
   </div>
  );
};

export default ActiveCount;