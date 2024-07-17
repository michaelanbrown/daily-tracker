import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function NewRecipe( { recipes, setRecipes } ) {
    const navigate = useNavigate();
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({
      name: '',
      calories: '',
      fats: '',
      carbs: '',
      sugars: '',
      added_sugars: '',
      protein: ''
    })
    const {name, calories, fats, carbs, sugars, added_sugars, protein} = formData

    function handleChange(e) {
      setFormData({
          ...formData,
          [e.target.name] : e.target.value
      });
    }

    function addRecipe(e) {
        e.preventDefault();
        const recipe = {
          name,
          calories,
          fats,
          carbs,
          sugars,
          added_sugars,
          protein
        }
        fetch(`/recipes`, {
         method: 'POST',
         headers: {
          "Content-Type" : "application/json"
         },
        body: JSON.stringify(recipe)
      }).then(res => {
        if (res.ok) {
          res.json().then(recipe => {
            setRecipes([...recipes, recipe])
            navigate(`/recipes`)
          })
        } else {
          res.json().then(json => setErrors(json.errors))
        }}
      )}

  return (
    <div>
      <form>
        <input type="text" placeholder='Food' name="name" value={name} className="input" onChange={handleChange}/>
        <br/>
        <input type="text" placeholder='Calories' name="calories" value={calories} className="input" onChange={handleChange}/>
        <br/>
      </form>
    </div>
  );
}

export default NewRecipe;