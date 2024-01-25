import React, { useState } from "react";

function BreakfastMap({ food }) {
  const [showMeal, setShowMeal] = useState(false)
  console.log(showMeal)

  function foodInformation() {
    setShowMeal(!showMeal)
  }

  return (
    <div>
      <li className="mealMap">{ food.name }{" "}<button className="logout" onClick={foodInformation}>+</button></li>
    </div>
  );
}

export default BreakfastMap;