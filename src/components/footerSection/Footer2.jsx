import React from 'react';
import facebookIcon from "../../assets/Facebook.png"
import instagramIcon from "../../assets/Instagram.png"
import twitterIcon from "../../assets/Twitter.png"

const Footer2 = () => {
    return (
        <div className='bg-[#101727] text-white  py-10 mb-2'>
           <div className='container mx-auto grid grid-cols-5 mb-15'>
             <div>
                <h1 className='text-3xl font-bold'>DigiTools</h1>
                <i>Premium digital tools for creators,<br></br> professionals, and businesses.<br></br> Work smarter with our suite of powerful tools.</i>
            </div>
            <div>
                 <h1 className='font-bold text-xl'>Product</h1>
                 <ul>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Templates</li>
                    <li>Integrations</li>
                 </ul>
            </div>
            <div>
                 <h1 className='font-bold text-xl'>Product</h1>
                 <ul>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Templates</li>
                    <li>Integrations</li>
                 </ul>
            </div>
            <div>
                 <h1 className='font-bold text-xl'>Product</h1>
                 <ul>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Templates</li>
                    <li>Integrations</li>
                 </ul>
            </div>
            <div>
                <h2 className='font-bold text-xl mb-6'>Social Links :</h2>
                <div className='flex gap-4 '>
                    <img src={facebookIcon} alt=""  className='cursor-pointer rounded-full'/>
                    <img src={instagramIcon} alt=""  className='cursor-pointer rounded-full'/>
                    <img src={twitterIcon} alt=""  className='cursor-pointer rounded-full'/>
                </div>
            </div>
           </div>

            <div className='border-t-2 border-t-gray-600 container mx-auto'>
                 <div className='justify-between flex mt-8'>
                    <h1>© 2026 Digitools. All rights reserved.</h1>
                <div className=''>
                    <ul className='flex gap-10'>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>Cookies</li>
                    </ul>
                </div>
                 </div>

            </div>
        </div>
    );
};

export default Footer2;