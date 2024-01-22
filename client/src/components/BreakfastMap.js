import React from "react";

function BreakfastMap({ food }) {
    console.log(food)

  return (
    <div>
      <li>{ food.name }</li>
    </div>
  );
}

export default BreakfastMap;