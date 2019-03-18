import React from 'react';
import Dish from './Dish';

const DinnerList = ({ dishes }) => (
  <div>
    { dishes.map( dish => 
        <Dish
          key={dish.id}
          {...dish}
          // updateDish={updateDish}
          // deleteDish={deleteDish}
        />
      )
    }
  </div>
)

export default DinnerList;