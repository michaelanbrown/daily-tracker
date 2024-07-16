import React, { useState, useEffect } from "react";
import RecipeShow from "./RecipeShow";
import { Route, Routes, Link, useNavigate } from "react-router-dom";

function Recipes( { recipes } ) {
  const [recipeMap, setRecipeMap] = useState([])
    const [filter, setFilter] = useState('')
    const [recipeFilter, setRecipefilter] = useState(recipes)
    const navigate = useNavigate();

    useEffect(() => {
      const mapping = recipes.length > 0 ? setRecipeMap(recipeFilter.map(recipe => {
        <div key={recipe.id}>
        <Link to={`${recipe.id}`}>{recipe.name}</Link>
        <Routes>
          <Route path={`recipes/${recipe.id}`} element={<RecipeShow recipes={recipes}/>}/>
        </Routes></div>
      })) : null
    },[recipes, recipeFilter])

    console.log(recipes.map (recipe => recipe.name))

    function newRecipe() {
      navigate("/newrecipe")
    }

    function handleChange(e) {
      setFilter(e.target.value); 
      setRecipefilter(recipes.filter(recipe => recipe.name.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1))
    }

  return (
    <div>
      <button className="new" onClick={newRecipe}>Add New Recipe</button>
      <input type="text" placeholder='Search' name="filter" value={filter} className="input" onChange={handleChange}/>
      <br/>
      {recipeMap}
    </div>
  );
}

export default Recipes;