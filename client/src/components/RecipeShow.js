import React from "react";
import IngredientShow from "./IngredientShow";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

function RecipeShow( { recipes } ) {
  const { id } = useParams()
  const [recipe, setRecipe] = useState({})
  //want to be able to edit the recipe
    //add a new ingredient or be able to edit ingredient serving size

    useEffect(() => {
      fetch(`recipes/${id}`)
    },[])


  return (
    <div>
      
    </div>
  );
}

export default RecipeShow;