import React from 'react';

const Footer1 = () => {
    return (
        <div className='mt-20'>
            <div className='bg-gradient-to-r from-[#6A5AF9] to-[#A43BF3] text-white text-center'>
                 <div className='py-20'>
                <h1 className='text-5xl font-bold'>Ready to Transform Your Workflow?</h1>
                <p>Join thousands of professionals who are already using Digitools to work smarter.<br></br>Start your free trial today.</p>
                 </div>

                 {/* button */}
            <div className=' flex gap-4 items-center justify-center '>
                 <button className='bg-white cursor-pointer p-4 rounded-full text-[#9514FA] font-bold'>Explore Products</button>
            
                <div className='flex w-fit font-bold items-center '>
                  <button className='cursor-pointer border py-4 px-6  rounded-full '>View Pricing</button>
               </div>
            </div>
            <h2 className='text-white py-5'>14-day free trial • No credit card required • Cancel anytime</h2>
            </div>

        </div>
    );
};

export default Footer1;