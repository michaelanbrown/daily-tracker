import React from "react";
import RecipeShow from "./RecipeShow";
import { NavLink } from "react-router-dom"

function Recipes( { recipes } ) {
    //want to be able to click into a recipe
    //want to be able to create a new recipe
    const recipeMap = recipes.map(recipe => {
      return <NavLink to={`recipe/${recipe.id}`}>{recipe.name}</NavLink>
    })

  return (
    <div>
      {recipeMap}
    </div>
  );
}

export default Recipes;