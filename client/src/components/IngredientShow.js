import React from "react";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

function IngredientShow( { ingredients } ) {
    //will want to be able to edit ingredient serving size
    const { id } = useParams()
    const [errors, setErrors] = useState([])
    const [ingredient, setIngredient] = useState({})

    useEffect(() => {
      fetch(`${id}`)
      .then(res => {
        if (res.ok) {
          res.json().then(res => {
            setIngredient(res)
          })
        }
      })
    }, [])

  return (
    <div>
      
    </div>
  );
}

export default IngredientShow;