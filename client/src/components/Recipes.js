import React from "react";
import RecipeShow from "./RecipeShow";
import { Route, Routes } from "react-router-dom";

function Recipes( { recipes } ) {
    //want to be able to click into a recipe
    //want to be able to create a new recipe
    const recipeMap = recipes.map(recipe => {
      return <Routes key={recipe.id}>
      <Route path={`recipes/${recipe.id}`} element={<RecipeShow/>}/>
        </Routes>
    })

  return (
    <div>
      {recipeMap}
    </div>
  );
}

export default Recipes;