import React from "react";
import { NavLink } from "react-router-dom"

function BreakfastMap({ food }) {
  console.log(food)

  return (
    <div>
      <NavLink>
        <li className="mealMap">{ food.name }</li>
      </NavLink>
    </div>
  );
}

export default BreakfastMap;