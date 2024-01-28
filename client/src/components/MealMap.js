import React, { useState } from "react";

function BreakfastMap({ food }) {
  const [showMeal, setShowMeal] = useState(false)

  function foodInformation() {
    setShowMeal(!showMeal)
  }

  //fix food.fat 0grams is blank
  console.log(food.fat)

  return (
    <div>
      <div className="mealMap">• { food.name }{" "}<button className="plus" onClick={foodInformation}>+</button></div>
      { showMeal ? <div className= "food">
        Calories: { food.calories }
        <br/>
        {food.fat = 0 ? `Fat: 0g` : `Fat: ${ food.fat } g`}
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