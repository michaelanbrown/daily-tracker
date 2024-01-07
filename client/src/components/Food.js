import React from "react";
import { useEffect, useState } from "react";

function Food({ foods, setFoods }) {
  const [foodsMap, setFoodsMap] = useState(foods)

  useEffect(() => {
    const foodMap = foods.map(food => {
      <div>
        <h4>{food.name}</h4>
      </div>
    })
  },[foods])

console.log(foods)
  return (
    <div>
      {foodMap}
    </div>
  );
}

export default Food;