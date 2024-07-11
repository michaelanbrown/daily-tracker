import React from "react";
import IngredientShow from "./IngredientShow";
import { Route, Routes, Link } from "react-router-dom";

function Ingredients( { ingredients } ) {

    const ingredientMap = ingredients.map(ingredient => {
      return <div key={ingredient.id}>
        <Link to={`${ingredient.id}`}>{ingredient.food_id}</Link>
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