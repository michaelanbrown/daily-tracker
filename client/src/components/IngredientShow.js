import React from "react";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

function IngredientShow( { ingredients } ) {
    //will want to be able to edit ingredient serving size
    const { id } = useParams()
    const [errors, setErrors] = useState([])
    const [ingredient, setIngredient] = useState({})
    const [edit, setEdit] = useState(false)
    const [serving, setServing] = useState(ingredient.serving_size)

    useEffect(() => {
      fetch(`${id}`)
      .then(res => {
        if (res.ok) {
          res.json().then(res => {
            setIngredient(res)
          })
        }
        else {
          res.json().then(json => setErrors([...errors, json.error]))
        }
      })
    }, [])

    function editServingSize(e) {
      e.preventDefault();
      fetch(`${id}`, {
        method: 'PATCH',
        headers: {
          "Content-Type" : "application/json",
          "Accept" : "application/json"
        },
        
      })
    }

  return (
    <div>
      
    </div>
  );
}

export default IngredientShow;