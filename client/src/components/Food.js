import React from "react";
import { useEffect, useState } from "react";

function Food({ foods, setFoods }) {
  const [foodsMap, setFoodsMap] = useState([])


  useEffect(() => {
    const mapping = foods ? setFoodsMap(foods.map(food => <div key={food.id}>
      <h4 className="foodName">{food.name}</h4>
      <p className="brand">{food.brand}</p>
      <h4>{food.calories} calories</h4>
      <p>{food.fats}g fat</p>
      <p>{food.carbs}g carbs</p>
      <p>{food.sugars}g sugar</p>
      <p className="addedSugar">{food.added_sugars}g added sugar</p>
      <p>{food.protein}g protein</p>
      </div>)) : null
  },[foods])
  
  return (
    <div>
      {foodsMap}
    </div>
  );
}

export default Food;