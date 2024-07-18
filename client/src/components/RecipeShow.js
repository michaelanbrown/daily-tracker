import React from "react";
import IngredientShow from "./IngredientShow";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Route, Routes, Link } from "react-router-dom";

function RecipeShow( { recipes, setRecipes } ) {
  //within each recipe we will display a list of ingredients with a link to the ingedient
  const { id } = useParams()
  const [recipe, setRecipe] = useState({})
  const [errors, setErrors] = useState([])
  const [edit, setEdit] = useState(false)
  const [ingredients, setIngredients]

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

    function updateRecipes(updatedRecipe) {
      const updatingRecipes = recipes.map(currentRecipe => {
        if (currentRecipe.id === recipe.id) {
          return updatedRecipe
        } else {
          return currentRecipe
        }
      })
      setRecipes(updatingRecipes)
    }

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
            updateRecipes(recipe)
            setRecipe(recipe)
          })
        } else {
          res.json().then(json => setErrors([...errors, json.error]))
        }
      })
    }

  return (
    <div>
      
    </div>
  );
}

export default RecipeShow;