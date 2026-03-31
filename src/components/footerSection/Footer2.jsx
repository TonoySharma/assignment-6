import React from 'react';
import facebookIcon from "../../assets/Facebook.png"
import instagramIcon from "../../assets/Instagram.png"
import twitterIcon from "../../assets/Twitter.png"

const Footer2 = () => {
    return (
        <div className='bg-[#101727] text-white py-10 mb-2'>
            
           {/* Top Section */}
           <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-15 px-4'>
             
             <div className='text-center lg:text-left'>
                <h1 className='text-3xl font-bold'>DigiTools</h1>
                <i>
                  Premium digital tools for creators,<br/>
                  professionals, and businesses.<br/>
                  Work smarter with our suite of powerful tools.
                </i>
            </div>

            <div className='text-center lg:text-left'>
                 <h1 className='font-bold text-xl mb-2'>Product</h1>
                 <ul className='space-y-1'>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Templates</li>
                    <li>Integrations</li>
                 </ul>
            </div>

            <div className='text-center lg:text-left'>
                 <h1 className='font-bold text-xl mb-2'>Product</h1>
                 <ul className='space-y-1'>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Templates</li>
                    <li>Integrations</li>
                 </ul>
            </div>

            <div className='text-center lg:text-left'>
                 <h1 className='font-bold text-xl mb-2'>Product</h1>
                 <ul className='space-y-1'>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Templates</li>
                    <li>Integrations</li>
                 </ul>
            </div>

            {/* Social */}
            <div className='text-center lg:text-right'>
                <h2 className='font-bold text-xl mb-4'>Social Links :</h2>
                <div className='flex gap-4 justify-center lg:justify-end'>
                    <img src={facebookIcon} alt=""  className='cursor-pointer rounded-full'/>
                    <img src={instagramIcon} alt=""  className='cursor-pointer rounded-full'/>
                    <img src={twitterIcon} alt=""  className='cursor-pointer rounded-full'/>
                </div>
            </div>

           </div>

            {/* Bottom Section */}
            <div className='border-t-2 border-t-gray-600'>
                 <div className='container mx-auto flex flex-col lg:flex-row justify-between items-center gap-4 mt-8 px-4 text-center lg:text-left'>
                    
                    <h1>© 2026 Digitools. All rights reserved.</h1>

                    <ul className='flex flex-col sm:flex-row gap-4 lg:gap-10'>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>Cookies</li>
                    </ul>

                 </div>
            </div>

        </div>
    );
};

export default Footer2;