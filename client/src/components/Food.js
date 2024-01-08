import React from "react";
import { useEffect, useState } from "react";

function Food({ foods, setFoods }) {
  const [foodsMap, setFoodsMap] = useState([])


  useEffect(() => {
    const mapping = foods ? setFoodsMap(foods.map(food => <div key={food.id}>
      <h4>{food.name}</h4>
      <p>{food.calories} calories</p>
      <br/>
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