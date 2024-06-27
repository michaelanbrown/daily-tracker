import React from "react";
import IngredientShow from "./IngredientShow";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

function RecipeShow( { recipes } ) {
  const { id } = useParams()
  const [recipe, setRecipe] = useState({})
  const [errors, setErrors] = useState([])
  const [edit, setEdit] = useState(false)
  //want to be able to edit the recipe
    //add a new ingredient or be able to edit ingredient serving size

    useEffect(() => {
      fetch(`${id}`)
      .then(res=> {
        if (res.ok) {
          res.json().then(res => {
            setRecipe(res)
          })}
          else {
            res.json().then(json => setErrors([...errors, json.error]))
          }
      })
    },[])

    function editRecipe(e) {
      e.preventDefault();
      fetch(`${id}`,{
        method: 'PATCH',
        headers: {
          "Content-Type" : "application/json",
          "Accept" : "application/json"
        },
        body: JSON.stringify(recipe)
      }).then(res => {
        if (res.ok) {
          res.json().then(recipe => {
            //need update recipes function
          })
        }
      })
    }

  return (
    <div>
      
    </div>
  );
}

export default RecipeShow;