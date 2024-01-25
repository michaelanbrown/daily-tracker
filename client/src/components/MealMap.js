import React, { useState } from "react";

function BreakfastMap({ food }) {
  const [showMeal, setShowMeal] = useState(false)
  console.log(food)

  function foodInformation() {

  }

  return (
    <div>
      <button className="logout" onClick={foodInformation}>
        <li className="mealMap">{ food.name }</li>
      </button>
    </div>
  );
}

export default BreakfastMap;