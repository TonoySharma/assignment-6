import React, { useState } from 'react';
import { Slide, toast } from 'react-toastify';

const AllCard2 = ({card, carts, setCarts}) => {
      const [isAdd, setIsAdd] = useState(false)
      const handleAddCard = () => {
            setIsAdd(true)
      const isFound = carts.find(item => item.id ===card.id )
        // console.log(isFound);
        if(isFound) {
          toast.error("This Card Already In Add!",{
             autoClose: 1500,
              theme: "dark",
              position: "top-center",
              transition: Slide,
          });
          return;
        }

            setCarts([...carts, card])
            toast.success("Added To Card!",{
              autoClose: 1500,
              theme: "dark",
              position: "top-center",
              transition: Slide,
            });

      }
    return (
         <div key={card.id} className="card w-full bg-gray-100 shadow-sm hover:shadow-lg transition ">
          <div className="card w-full h-[500px] p-5 bg-gray-100 shadow-sm hover:shadow-lg transition overflow-hidden">

            <div className='flex items-center justify-between'>
              <img src={card.icon} alt=""  className='mb-2'/>
              <span className="badge badge-xs badge-warning text-black">
                {card.tag || "Best Seller"}
              </span>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl font-bold">{card.name}</h2>
              <p className='text-[#627382]'>{card.description}</p>
              <span className="text-xl">${card.price}/mo</span>
            </div>

            <ul className="mt-6 flex flex-col gap-2 text-xs">
              {card.features.map((feature, index) => (
                <li key={index}>
                   {feature}
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <button onClick={handleAddCard} className="btn bg-gradient-to-r from-[#6A5AF9] to-[#A43BF3] btn-block text-white rounded-3xl ">
                {isAdd ? "Add To Card" : "Buy Now"}
              </button>
            </div>

          </div>
        </div>
    );
};

export default AllCard2;