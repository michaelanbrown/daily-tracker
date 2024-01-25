import React, { useState } from "react";

function BreakfastMap({ food }) {
  const [showMeal, setShowMeal] = useState(false)

  function foodInformation() {
    setShowMeal(!showMeal)
  }

  return (
    <div>
      <div className="mealMap">• { food.name }{" "}<button className="plus" onClick={foodInformation}>+</button></div>
      { showMeal ? <div>
        Calories: { food.calories }
        Fat: { food.fat }
        Carbohydrates: { food.carbs }
      </div> : null}
    </div>
  );
}

export default BreakfastMap;