import React from "react";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

function IngredientShow( { ingredients, setIngredients } ) {
    //will want to be able to edit ingredient serving size - function is complete
    const { id } = useParams()
    const [errors, setErrors] = useState([])
    const [ingredient, setIngredient] = useState({})
    const [edit, setEdit] = useState(false)
    const [serving, setServing] = useState({
      serving_size: ingredient.serving_size
    })

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
      
    </div>
  );
}

export default IngredientShow;