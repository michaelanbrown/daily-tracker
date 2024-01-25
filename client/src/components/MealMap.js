import React from "react";
import { NavLink } from "react-router-dom"

function BreakfastMap({ food }) {
  console.log(food)

  return (
    <div>
      <button>
        <li className="mealMap">{ food.name }</li>
      </button>
    </div>
  );
}

export default BreakfastMap;