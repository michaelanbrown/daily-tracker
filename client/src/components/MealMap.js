import React from "react";

function BreakfastMap({ food }) {
  console.log(food)

  return (
    <div>
      <button className="logout">
        <li className="mealMap">{ food.name }</li>
      </button>
    </div>
  );
}

export default BreakfastMap;