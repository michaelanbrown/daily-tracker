import React, { useState, useEffect } from "react";
import IngredientShow from "./IngredientShow";
import { Route, Routes, Link } from "react-router-dom";

function Ingredients( { ingredients, setIngredients } ) {
  const [ingredientMap, setIngredientMap] = useState([])
  //use foods to find the food name for each ingredient - check the completion

  useEffect(() => {
     const ingredientPresent = ingredients.length !== 0 ? setIngredients(ingredients) : null
     setIngredientMap(ingredients.map(ingredient => {
      return <div key={ingredient.id}>
        <Link to={`${ingredient.id}`}>{ingredient.food.name}</Link>
        <Routes>
          <Route path={`ingredients/${ingredient.id}`} element={<IngredientShow ingredients={ingredients}/>}/>
        </Routes>
      </div>
    }))
  },[ingredients])

  console.log(ingredients)

  return (
    <div>
      {ingredientMap}
    </div>
  );
}

export default Ingredients;