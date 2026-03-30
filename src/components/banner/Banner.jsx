import React from 'react';
import blueIcon from "../../assets/blue-icon.png";
import playIcon from "../../assets/Play.png";
import bannerImg from "../../assets/banner.png";

const Banner = () => {
    return (
        <div className='flex container mx-auto items-center' >
        <div className='container mx-auto space-y-5'>
                <div className='flex gap-1 mt-5 bg-[#E1E7FF] px-3 rounded-full  w-fit'>
                <img src={blueIcon} alt="icon" className='w-8 mt-2' />
                <h2 className='font-semibold text-[#4f39f6] mt-2 '>New: AI-Powered Tools Available</h2>
                </div>

                <div className='space-y-4'>
                     <h1 className='font-bold text-5xl '>Supercharge Your Digital Workflow </h1>
                <p className='text-[#627382]'>Access premium AI tools, design assets, templates, and productivity <br></br>
                   software— all in one place. Start creating faster today.Explore Products</p>
                </div>
                          
                    {/* button */}

                 <div className='py-6 flex gap-5'>
                       <button className='bg-[#9514FA] p-4 rounded-full text-white cursor-pointer font-bold'>Explore Products</button>

                     <div className='flex gap-2 border border-[#9514FA] w-fit p-4 rounded-full text-[#9514FA]  font-bold items-center'>
                         <img src={playIcon} alt="play" className='w-5 h-5 object-contain' />
                         <button className='cursor-pointer'>Watch Demo</button>
                   </div>
                </div>
       </div>

              {/* banner image */}
                <div className='container mx-auto mt-20 flex justify-end'>
                    <img src={bannerImg} alt="banner" />
                </div>
        </div>
    );
};

export default Banner;