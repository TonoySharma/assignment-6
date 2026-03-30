import React from 'react';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { RiDeleteBin5Fill } from 'react-icons/ri';

const EmptyCard = ({ carts }) => {
//   console.log(carts);
   const totalPrice = carts.reduce((sum, item) => sum +item.price, 0)
   console.log(totalPrice);



  return (
    <div className='container mx-auto rounded-xl shadow p-5 border-t-3 border-t-red-600'>
      
      <h1 className='font-bold text-2xl'>Your Cart :</h1>

      {/* Empty state */}
      {carts?.length === 0 && (
        <div className=' mt-3'>
           <div className='flex items-center justify-center'>
             <AiOutlineExclamationCircle />
           </div>
            <p className='text-gray-500 text-center mt-3'>Your cart is empty</p>
        </div>
      )}

      {/* Cart Items */}
      <div className='mt-6 space-y-4'>
        {carts?.map((item, index) => (
          <div
            key={index}
            className='flex items-center justify-between rounded-2xl bg-gray-100 p-4 shadow border-t-3 border-green-600 hover:shadow-lg transition'
          >
            
            {/* Left side */}
            <div className='flex items-center gap-4'>
              <img src={item.icon} alt="icon" className='w-12 h-12' />

              <div>
                <h2 className='font-semibold'>{item.name}</h2>
                <p className='font-medium'>${item.price}</p>
              </div>
            </div>

            {/* Delete button */}
            <div className='border border-gray-300 p-3 rounded-full cursor-pointer hover:bg-red-400 hover:text-white transition'>
              <RiDeleteBin5Fill />
            </div>

          </div>
          
        ))}
      </div>
      <div className='py-4 flex justify-between'>
         <h2>Total:</h2>
         <p>$78</p>
      </div>
      {/* button */}
     <div className="mt-6 flex justify-center ">
        <button className="btn bg-[#9514FA]  rounded-4xl text-white py-5 px-20">Proceed to Checkout</button>
    </div>

    </div>
  );
};

export default EmptyCard;