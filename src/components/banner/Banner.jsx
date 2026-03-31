import React from 'react';
import blueIcon from "../../assets/blue-icon.png";
import playIcon from "../../assets/Play.png";
import bannerImg from "../../assets/banner.png";
import { AiOutlineArrowRight } from 'react-icons/ai';

const Banner = () => {
    return (
        <div className='flex flex-col lg:flex-row container mx-auto items-center px-4 py-10 gap-10'>

            <div className='space-y-5 w-full text-center lg:text-left'>
                
                <div className='flex items-center justify-center lg:justify-start gap-2 bg-[#E1E7FF] py-1 rounded-full w-fit mx-auto lg:mx-0 px-4'>
                    <img src={blueIcon} alt="icon" className='w-6 mt-2' />
                    <h2 className='font-semibold text-[#4f39f6] text-sm md:text-base'>
                        New: AI-Powered Tools Available
                    </h2>
                </div>

                <div className='space-y-4'>
                    <h1 className='font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight'>
                        Supercharge Your Digital Workflow
                    </h1>

                    <p className='text-[#627382] text-sm sm:text-base'>
                        Access premium AI tools, design assets, templates, and productivity<br></br> 
                        software—all in one place. Start creating faster today.
                    </p>
                </div>

                {/* Buttons */}
                <div className='py-6 flex flex-col sm:flex-row items-center lg:items-start gap-4 justify-center lg:justify-start'>
                    
                    <button className='bg-gradient-to-r from-[#6A5AF9] to-[#A43BF3] px-6 py-3 rounded-full text-white font-bold w-full sm:w-auto flex items-center gap-2 cursor-pointer'>
                        Explore Products<AiOutlineArrowRight />
                    </button>

                    <div className='flex gap-2 border border-[#9514FA] px-6 py-3 rounded-full text-[#9514FA] font-bold items-center justify-center w-full sm:w-auto'>
                        <img src={playIcon} alt="play" className='w-5 h-5 object-contain' />
                        <button className='cursor-pointer'>Watch Demo</button>
                    </div>
                </div>
            </div>

            {/* Right Image */}
            <div className='w-full flex justify-center lg:justify-end'>
                <img src={bannerImg} alt="banner" className='max-w-full h-auto shadow-xl'/>
            </div>

        </div>
    );
};

export default Banner;