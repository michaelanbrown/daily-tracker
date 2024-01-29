import React, { useState } from "react";

function FoodList({ foods }) {
  const [filter, setFilter] = useState('')
//search for food or add new food

const foodsMap = foods.map(food => {
  return <div key={food.id}>{food.name} - {food.brand}<br/><br/></div>
})

  return (
    <div>
      
      {foodsMap}
    </div>
  );
}

export default FoodList;