import React from "react";
import RecipeShow from "./RecipeShow";
import { Route, Routes, Link } from "react-router-dom";

function Recipes( { recipes, setRecipes } ) {
    //want to be able to create a new recipe - put newRecipe function on a new page

    
    const recipeMap = recipes.map(recipe => {
      return <div key={recipe.id}>
      <Link to={`${recipe.id}`}>{recipe.name}</Link>
      <Routes>
        <Route path={`recipes/${recipe.id}`} element={<RecipeShow recipes={recipes}/>}/>
      </Routes></div>
    })

    function newRecipe() {
      
    }

  return (
    <div>
      <button className="new" onClick={}>Add New Recipe</button>
      {recipeMap}
    </div>
  );
}

export default Recipes;