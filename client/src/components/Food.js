import React from "react";
import { useEffect, useState } from "react";

function Food({ foods, setFoods }) {
  const [foodsMap, setFoodsMap] = useState([])


  useEffect(() => {
    const mapping = foods ? setFoodsMap(foods.map(food => <div key={food.id}>
      <h4 className="foodName">{food.name}</h4>
      <h4>{food.calories} calories</h4>
      <p>{food.fats}g fat</p>
      </div>)) : null
  },[foods])
  
  return (
    <div>
      {foodsMap}
    </div>
  );
}

export default Food;