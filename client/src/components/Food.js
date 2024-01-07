import React from "react";
import { useEffect, useState } from "react";

function Food({ foods, setFoods }) {

  const foodsMap = foods.map(food => {
    <div>
      <h4>{food.name}</h4>
    </div>})

  return (
    <div>
      {foodsMap}
    </div>
  );
}

export default Food;