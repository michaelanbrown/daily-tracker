import React from "react";
import RecipeShow from "./RecipeShow";
import { Route, Routes, Link } from "react-router-dom";

function Recipes( { recipes } ) {
    //want to be able to create a new recipe

    function addRecipe(e) {
      e.preventDefault()
    }
    
    const recipeMap = recipes.map(recipe => {
      return <div key={recipe.id}>
      <Link to={`${recipe.id}`}>{recipe.name}</Link>
      <Routes>
        <Route path={`recipes/${recipe.id}`} element={<RecipeShow recipes={recipes}/>}/>
      </Routes></div>
    })

  return (
    <div>
      {recipeMap}
    </div>
  );
}

export default Recipes;