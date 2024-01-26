import React, { useState } from "react";

function BreakfastMap({ food }) {
  const [showMeal, setShowMeal] = useState(false)

  function foodInformation() {
    setShowMeal(!showMeal)
  }

  return (
    <div>
      <div className="mealMap">• { food.name }{" "}<button className="plus" onClick={foodInformation}>+</button></div>
      { showMeal ? <div className= "food">
        Calories: { food.calories }
        <br/>
        Fat: { food.fat }
        <br/>
        Carbohydrates: { food.carbs }
        <br/>
        Sugars: { food.sugars }
        <br/>
        <div className="mealMapAddedSugar">Added Sugars: { food.added_sugars }</div>
        <br/>
        Protein: { food. protein }
      </div> : null}
    </div>
  );
}

export default BreakfastMap;