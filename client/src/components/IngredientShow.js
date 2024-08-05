import React from "react";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

function IngredientShow( { ingredients, setIngredients } ) {
    const { id } = useParams()
    const [errors, setErrors] = useState([])
    const [ingredient, setIngredient] = useState({})
    const [edit, setEdit] = useState(false)
    const [serving, setServing] = useState({
      serving_size: ingredient.serving_size
    })

    console.log(ingredients)

    useEffect(() => {
      fetch(`${id}`)
      .then(res => {
        if (res.ok) {
          res.json().then(ingredient => {
            setIngredient(ingredient)
            setServing({
              serving_size: ingredient.serving_size
            })
          })
        }
        else {
          res.json().then(json => setErrors([...errors, json.error]))
        }
      })
    }, [])

    function updateIngredients(updatedIngredient) {
      const updatingIngredients = ingredients.map(currentIngredient => {
        if (currentIngredient.id === ingredient.id) {
          return updatedIngredient
        } else {
         return currentIngredient 
        }
      })
      setIngredients(updatingIngredients)
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
          res.json().then(serving => {
            updateIngredients(serving)
            setIngredient(serving)
          })
        } else {
          res.json().then(json => setErrors([...errors, json.error]))
        }
      })
    }

  return (
    <div>
      <br/>
      <h2>Ingredient:</h2>
      <h3>{ingredient.food.name}{' '}</h3><button onClick={editServingSize}>Edit the Serving Size</button>
      <p>Brand: {ingredient.food.brand}</p>
      <p>Calories: {ingredient.food.calories * ingredient.serving_size}</p>
      <p>Fats: {ingredient.food.fats * ingredient.serving_size}</p>
      <p>Carbs: {ingredient.food.carbs * ingredient.serving_size}</p>
      <p>Sugars: {ingredient.food.sugars * ingredient.serving_size}</p>
      <p>Added Sugars: {ingredient.food.added_sugars * ingredient.serving_size}</p>
      <p>Protein: {ingredient.food.protein * ingredient.serving_size}</p>
    </div>
  );
}

export default IngredientShow;