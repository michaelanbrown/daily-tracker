import React, { useState, useEffect } from "react";
import IngredientShow from "./IngredientShow";
import { Route, Routes, Link } from "react-router-dom";

function Ingredients( { ingredients, foods } ) {
  [foodName, setFoodName] = useState([])
  //use foods to find the food name for each ingredient - check the completion

  useEffect(() => {
     const ingredientMapping = ingredients ? 
  },[ingredients, foods])

    const ingredientMap = ingredients.map(ingredient => {
      return <div key={ingredient.id}>
        <Link to={`${ingredient.id}`}>{foods.filter(food => food.id === ingredient.food_id).name}</Link>
        <Routes>
          <Route path={`ingredients/${ingredient.id}`} element={<IngredientShow ingredients={ingredients}/>}/>
        </Routes>
      </div>
    })

  

  return (
    <div>
      {ingredientMap}
    </div>
  );
}

export default Ingredients;