import React from "react";
import RecipeShow from "./RecipeShow";
import { Route, Routes, Link, useNavigate } from "react-router-dom";

function Recipes( { recipes, setRecipes } ) {
  const navigate = useNavigate();
    //want to be able to create a new recipe - put newRecipe function on a new page

    function addRecipe(e) {
      e.preventDefault();
      const recipe = {
        name,
        calories,
        fats,
        carbs,
        sugars,
        added_sugars,
        protein
      }
      fetch(`/recipes`, {
       method: 'POST',
       headers: {
        "Content-Type" : "application/json"
       },
      body: JSON.stringify(recipe)
    }).then(res => {
      if (res.ok) {
        res.json().then(recipe => {
          setRecipes([...recipes, recipe])
          navigate(`/recipes`)
        })
      }
    })
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