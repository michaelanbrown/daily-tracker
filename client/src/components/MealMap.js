import React, { useState } from "react";

function BreakfastMap({ food }) {
  const [showMeal, setShowMeal] = useState(false)
  console.log(showMeal)

  function foodInformation() {
    setShowMeal(!showMeal)
  }

  return (
    <div>
      <div className="mealMap">• { food.name }{" "}<button className="plus" onClick={foodInformation}>+</button></div>
    </div>
  );
}

export default BreakfastMap;