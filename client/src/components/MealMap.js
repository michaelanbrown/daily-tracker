import React, { useState } from "react";

function BreakfastMap({ food, category }) {
  const [showMeal, setShowMeal] = useState(false)
  const [plus, setPlus] = useState("+")

  //add ability to destroy a category
  //add ability to edit a category's servings - update method complete

  function foodInformation() {
    setShowMeal(!showMeal)
    plus === "+" ? setPlus("-") : setPlus("+")
  }

  return (
    <div>
      <div className="mealMap">• { food.name }{" "}<button className="plus" onClick={foodInformation}>{plus}</button></div>
      { showMeal ? <div className= "food">
        {food.calories === 0 ? `Calories: 0` : `Calories: ${ food.calories * category.servings }`}
        <br/>
        {food.fats === 0 ? `Fat: 0 g` : `Fat: ${ food.fats * category.servings } g`}
        <br/>
        {food.carbs === 0 ? `Carbohydrates: 0 g` : `Carbohydrates: ${ food.carbs * category.servings } g`}
        <br/>
        {food.sugars === 0 ? `Sugars: 0 g` : `Sugars: ${ food.sugars * category.servings } g`}
        <br/>
        <div className="mealMapAddedSugar">
          {food.added_sugars === 0 ? `Added Sugars: 0 g` : `Added Sugars: ${ food.added_sugars * category.servings } g`}
        </div>
        {food.protein === 0 ? `PRoetin: 0 g` : `Protein: ${ food.protein * category.servings } g`}
        <br/>
        <button className="editDelete">Edit</button>
      </div> : null}
    </div>
  );
}

export default BreakfastMap;