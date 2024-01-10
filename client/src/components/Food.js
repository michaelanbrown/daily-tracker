import React from "react";
import { useEffect, useState } from "react";

function Food({ foods, setFoods }) {
  const [foodsMap, setFoodsMap] = useState([])


  useEffect(() => {
    const mapping = foods ? setFoodsMap(foods.map(food => <div key={food.id}>
      <h4 className="foodName">{food.name}</h4>
      <div className="brand">{food.brand}</div>
      <h4>{food.calories} calories</h4>
      <p>{food.fats}g fat
      <br className="break"/>
      {food.carbs}g carbs
      <br className="break"/>
      {food.sugars}g sugar
      <br className="break"/>
      <div className="addedSugar">{food.added_sugars}g added sugar</div>
      {food.protein}g protein</p>
      </div>)) : null
  },[foods])
  
//fix spacing and div cannot be descendant of p tag

  return (
    <div>
      {foodsMap}
    </div>
  );
}

export default Food;