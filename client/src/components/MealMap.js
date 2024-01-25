import React, { useState } from "react";

function BreakfastMap({ food }) {
  const [showMeal, setShowMeal] = useState(false)
  console.log(showMeal)

  function foodInformation() {
    setShowMeal(!showMeal)
  }

  return (
    <div>
      <li>{ food.name }</li>{" "}<button className="plus" onClick={foodInformation}>+</button>
    </div>
  );
}

export default BreakfastMap;