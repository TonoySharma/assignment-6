import React, { useState } from 'react';

const AllCard2 = ({card}) => {
      const [isAdd, setIsAdd] = useState(false)
      const handleAddCard = () => {
            setIsAdd(true)
      }
    return (
         <div key={card.id} className="card w-96 bg-gray-100 shadow-sm">
          <div className="card-body border border-gray-300 rounded-xl">

            <div className='flex items-center justify-between'>
              <img src={card.icon} alt="" />
              <span className="badge badge-xs badge-warning">
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

            <div className="mt-6">
              <button onClick={handleAddCard} className="btn btn-primary btn-block rounded-3xl">
                {isAdd ? "Add To Card" : "But Now"}
              </button>
            </div>

          </div>
        </div>
    );
};

export default AllCard2;