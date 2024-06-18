import React from "react";
import IngredientShow from "./IngredientShow";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

function RecipeShow( { recipes } ) {
  const { id } = useParams()
  //want to be able to edit the recipe
    //add a new ingredient or be able to edit ingredient serving size
console.log(id)
    useEffect(() => {
      fetch(`recipes/$`)
    },[])


  return (
    <div>
      
    </div>
  );
}

export default RecipeShow;