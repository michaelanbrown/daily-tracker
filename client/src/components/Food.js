import React from "react";
import { useEffect } from "react";

function Food({ foods, setFoods }) {
  const foodMap = foods.map(food => {
    <div>
      <h4>{food.name}</h4>
    </div>
  })

  useEffect(() => {
    
  },[])

console.log(foods)
  return (
    <div>
      {foodMap}
    </div>
  );
}

export default Food;