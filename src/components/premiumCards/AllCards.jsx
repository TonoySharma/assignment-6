import React, { use } from 'react';
import AllCard2 from './AllCard2';


const AllCards = ({ modelPromise, carts, setCarts }) => {
  const models = use(modelPromise);
  // console.log(models);


  return (

    <div className="container mx-auto grid grid-cols-4 gap-6">
      {models.map((card) => (
        <AllCard2 key={card.id} card={card} carts={carts} setCarts={setCarts}></AllCard2>
      ))}
    </div>

  );
};

export default AllCards;