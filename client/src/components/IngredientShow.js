import React from "react";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

function IngredientShow( { ingredients, setIngredients } ) {
    const { id } = useParams()
    const [errors, setErrors] = useState([])
    const [ingredient, setIngredient] = useState(null)
    const [edit, setEdit] = useState(false)
    const [serving, setServing] = useState({
      serving_size: ingredient.serving_size
    })

    // useEffect is not rendering at all

    // useEffect(() => {
    //   fetch(`${id}`)
    //   .then(res => {
    //     if (res.ok) {
    //       res.json().then(ingredient => {
    //         setIngredient(ingredient)
    //         setServing({
    //           serving_size: ingredient.serving_size
    //         })
    //       })
    //     }
    //     else {
    //       res.json().then(json => setErrors([...errors, json.error]))
    //     }
    //   })
    // }, [])

    useEffect(() => {
      const fetchIngredient = () => {
        fetch(`${id}`)
        .then(res => {

        })
      };
      fetchIngredient();
    },[])

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
            setEdit(false)
          })
        } else {
          res.json().then(json => setErrors([...errors, json.error]))
        }
      })
    }

    function editIngredients() {
      setEdit(!edit)
    }

    function handleChange(e) {
      setServing({
        serving_size: e.target.value
      })
    }

  return (
    <div>
      <br/>
      {edit && ingredient ? <form onSubmit={editServingSize}>
      <h3>{ingredient.food.name}{' '}</h3><button onClick={editIngredients}>Edit the Serving Size</button>
        <input type="text" placeholder='Serving Size' name="serving_size" value={serving.serving_size} className="input" onChange={handleChange}/>
        <p>Brand: {ingredient.food.brand}</p>
        <p>Calories: {ingredient.food.calories * ingredient.serving_size}</p>
        <p>Fats: {ingredient.food.fats * ingredient.serving_size}</p>
        <p>Carbs: {ingredient.food.carbs * ingredient.serving_size}</p>
        <p>Sugars: {ingredient.food.sugars * ingredient.serving_size}</p>
        <p>Added Sugars: {ingredient.food.added_sugars * ingredient.serving_size}</p>
        <p>Protein: {ingredient.food.protein * ingredient.serving_size}</p>
        <br/>
        <br/>
        <input type="submit" className="submit" value="Edit Ingredient!" />
        { errors ? <br/> : null }
        { errors ? errors.map(error => <div key={error}>{error}</div>) : null }
      </form> :

      <div>
        <h2>Ingredient:</h2>
        <h3>{ingredient.food.name}{' '}</h3><button onClick={editIngredients}>Edit the Serving Size</button>
        <p>Seriving Size: {ingredient.serving_size}</p>
        <p>Brand: {ingredient.food.brand}</p>
        <p>Calories: {ingredient.food.calories * ingredient.serving_size}</p>
        <p>Fats: {ingredient.food.fats * ingredient.serving_size}</p>
        <p>Carbs: {ingredient.food.carbs * ingredient.serving_size}</p>
        <p>Sugars: {ingredient.food.sugars * ingredient.serving_size}</p>
        <p>Added Sugars: {ingredient.food.added_sugars * ingredient.serving_size}</p>
        <p>Protein: {ingredient.food.protein * ingredient.serving_size}</p>
      </div>}
      { errors ? <br/> : null }
      { errors ? errors.map(error => <div key={error}>{error}</div>) : null }
    </div>
  );
}

export default IngredientShow;