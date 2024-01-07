import React from "react";
import { useEffect, useState } from "react";

function Food({ foods, setFoods }) {
  const [foodsMap, setFoodsMap] = useState(foods)

  useEffect(() => {
    setFoodsMap(foods.map(food => {
      <div>
        <h4>{food.name}</h4>
      </div>
    }))
  },[foods])

console.log(foods)
  return (
    <div>
      {foodsMap}
    </div>
  );
}

export default Food;