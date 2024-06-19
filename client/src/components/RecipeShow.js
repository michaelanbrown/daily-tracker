import React from "react";
import IngredientShow from "./IngredientShow";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

function RecipeShow( { recipes } ) {
  const { id } = useParams()
  const [recipe, setRecipe] = useState({})
  const [errors, setErrors]
  //want to be able to edit the recipe
    //add a new ingredient or be able to edit ingredient serving size

    useEffect(() => {
      fetch(`recipes/${id}`)
      .then(res=> {
        if (res.ok) {
          res.json().then(res => {
            setRecipe(res)
          })
        }
      })
    },[])


  return (
    <div>
      
    </div>
  );
}

export default RecipeShow;