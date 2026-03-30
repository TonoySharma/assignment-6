import React from 'react';

const ActiveCount = () => {
  return (
   <div>
      <div className='bg-[#9514FA] py-10 flex justify-center items-center gap-30 text-white mt-20'>
      
      {/* Active Users */}
      <div className='text-center'>
        <h1 className='font-bold text-5xl'>50K+</h1>
        <p className='text-xl'>Active Users</p>
      </div>

      {/* Divider */}
      <div className='divider divider-horizontal before:bg-white after:bg-white'></div>

      {/* Premium Tools */}
      <div className='text-center'>
        <h1 className='font-bold text-5xl'>200+</h1>
        <p className='text-xl'>Premium Tools</p>
      </div>

      {/* Divider */}
      <div className='divider divider-horizontal before:bg-white after:bg-white'></div>

      {/* Rating */}
      <div className='text-center'>
        <h1 className='font-bold text-5xl'>4.9</h1>
        <p className='text-xl'>Rating</p>
      </div>
    </div>

       <div className='text-center'>
          <h1 className='font-bold text-5xl mt-20 '>Premium Digital Tools</h1>
          <p className='text-[#627382] mt-3'>Choose from our curated collection of premium digital products designed  <br></br>to boost your productivity and creativity.</p>
      </div>
   </div>
  );
};

export default ActiveCount;