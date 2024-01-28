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
        {food.fats === 0 ? `Fat: 0 g` : `Fat: ${ food.fats } g`}
        <br/>
        Carbohydrates: { food.carbs } g
        <br/>
        Sugars: { food.sugars } g
        <br/>
        <div className="mealMapAddedSugar">Added Sugars: { food.added_sugars } g</div>
        Protein: { food. protein } g
      </div> : null}
    </div>
  );
}

export default BreakfastMap;