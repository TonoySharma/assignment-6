import React from 'react';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { Slide, toast } from 'react-toastify';

const EmptyCard = ({ carts, setCarts }) => {
//   console.log(carts);
   const totalPrice = carts.reduce((sum, item) => sum +item.price, 0)
//    console.log(totalPrice);
const handlePayment = () => {
    setCarts([]);


    
          toast.success("added to card!",{
              autoClose: 1500,
              theme: "dark",
              position: "top-center",
              transition: Slide,
            });

};

const handleDelete = (deleteItem) => {
// console.log(deleteItem);
const filterArray = carts.filter(cart => cart.id !== deleteItem.id )
// console.log(filterArray);
setCarts(filterArray)
   toast.success("added to card!",{
              autoClose: 1500,
              theme: "dark",
              position: "top-center",
              transition: Slide,
            });
}


  return (
    <div className='container mx-auto rounded-xl shadow p-5 border-t-3 border-t-red-600'>
      
      <h1 className='font-bold text-2xl'>Your Cart :</h1>

      {/* Empty state */}
      {carts?.length === 0 && (
        <div className='mt-20'>
            {/* react icon */}
           <div className='flex items-center justify-center'>
             <AiOutlineExclamationCircle />
           </div>
            <p className='text-gray-500 text-center mt-3'>Your cart is empty</p>
        </div>
      )}

      {/* Cart Items */}
      <div className='mt-6 space-y-4'>
        {carts?.map((item, ind) => (
          <div
            key={ind}
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
            <div onClick={()=>handleDelete (item)} className='border border-gray-300 p-3 rounded-full cursor-pointer hover:bg-red-400 hover:text-white transition'>
              <RiDeleteBin5Fill />
            </div>
          </div>
        ))}
      </div>

      {/* total count */}
      <div className='py-4 flex justify-between'>
         <h2 className='font-semibold'>Total:</h2>
         <p className='font-semibold'>${totalPrice}</p>
      </div>
      {/* button */}
     <div onClick={ handlePayment } className="mt-6 flex justify-center">
        <button className="btn bg-[#9514FA]  rounded-4xl text-white py-5 px-20">Proceed to Checkout</button>
    </div>

    </div>
  );
};

export default EmptyCard;