import React from "react";
import RecipeShow from "./RecipeShow";
import { Route, Routes, Link, useNavigate } from "react-router-dom";

function Recipes( { recipes, setRecipes } ) {
  //create filter to search for recipes
    const [filter, setFilter] = useState('')
    const [recipeFilter, setRecipefilter] = useState(foods)
    const navigate = useNavigate();
    
    const recipeMap = recipes.map(recipe => {
      return <div key={recipe.id}>
      <Link to={`${recipe.id}`}>{recipe.name}</Link>
      <Routes>
        <Route path={`recipes/${recipe.id}`} element={<RecipeShow recipes={recipes}/>}/>
      </Routes></div>
    })

    function newRecipe() {
      navigate("/newrecipe")
    }

    function handleChange(e) {
      setFilter(e.target.value); 
    }

  return (
    <div>
      <button className="new" onClick={newRecipe}>Add New Recipe</button>
      {recipeMap}
    </div>
  );
}

export default Recipes;