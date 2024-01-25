import React from "react";

function BreakfastMap({ food }) {

  return (
    <div>
      <li className="mealMap">{ food.name }</li>
    </div>
  );
}

export default BreakfastMap;