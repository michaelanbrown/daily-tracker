import React from "react";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

function IngredientShow( { ingredients, setIngredients } ) {
    //will want to be able to edit ingredient serving size
    const { id } = useParams()
    const [errors, setErrors] = useState([])
    const [ingredient, setIngredient] = useState({})
    const [edit, setEdit] = useState(false)
    const [serving, setServing] = useState({
      serving_size: ingredient.serving_size,
      food_id: ingredient.food_id,
      recipe_id: ingredient.recipe.id
    })

    useEffect(() => {
      fetch(`${id}`)
      .then(res => {
        if (res.ok) {
          res.json().then(ingredient => {
            setIngredient(ingredient)
            setServing({
              serving_size: ingredient.serving_size,
              food_id: ingredient.food_id,
              recipe_id: ingredient.recipe.id
            })
          })
        }
        else {
          res.json().then(json => setErrors([...errors, json.error]))
        }
      })
    }, [])

    function updateServingSize(updatedServing) {
      const updatingServingSize = ingredients.map(currentIngredient => {
        if (currentIngredient.id === ingredient.id) {
          return updatedServing
        } else {
         return currentIngredient 
        }
      })
      setIngredients(updatingServingSize)
    }

    function editServingSize(e) {
      e.preventDefault();
      fetch(`${id}`, {
        method: 'PATCH',
        headers: {
          "Content-Type" : "application/json",
          "Accept" : "application/json"
        },
        body: JSON.stringify(serving)
      }).then(res => {
        if (res.ok) {
          
        }
      })
    }

  return (
    <div>
      
    </div>
  );
}

export default IngredientShow;