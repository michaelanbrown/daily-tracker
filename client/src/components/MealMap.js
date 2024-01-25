import React from "react";
import { NavLink } from "react-router-dom"

function BreakfastMap({ food }) {
  console.log(food)

  return (
    <div>
      <li className="mealMap">{ food.name }</li>
    </div>
  );
}

export default BreakfastMap;