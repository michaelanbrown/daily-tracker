import React from "react";
import IngredientShow from "./IngredientShow";
import { Route, Routes } from "react-router-dom";

function Ingredients( { ingredients } ) {
    //will want to be able to edit ingredient serving size
    //will be able to see all ingredients and click into each one

    const ingredientMap = ingredients.map( ingredient => {
      return <div>
        <Route path={`ingredients/${recipe.id}`}/>
      </div>
    })

  return (
    <div>
      
    </div>
  );
}

export default Ingredients;