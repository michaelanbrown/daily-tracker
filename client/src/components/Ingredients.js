import React from "react";
import IngredientShow from "./IngredientShow";
import { Route, Routes, Link } from "react-router-dom";

function Ingredients( { ingredients } ) {
    //will want to be able to edit ingredient serving size
    //will be able to see all ingredients and click into each one

    const ingredientMap = ingredients.map( ingredient => {
      return <div key={ingredient.id}>
        <Link to={`${ingredient.id}`}>{ingredient.name}</Link>
        <Routes>
          <Route path={`ingredients/${recipe.id}`} element={<IngredientShow/>}/>
        </Routes>
      </div>
    })

  return (
    <div>
      
    </div>
  );
}

export default Ingredients;