import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

function ServingPage({ food, meal, categories, setCategories }) {
const [servingPage, setServingPage] = useState(false)
const [servingSize, setServingSize] = useState(1)
const [errors, setErrors] = useState([])
const navigate = useNavigate()

//add the onAdd function to the form input, make sure to add the usage of the servingsize and the serving size must be a number, add errors

function onClick() {
  setServingPage(!servingPage)
}

function handleChange(e) {
  setServingSize(e.target.value)
}

function onAdd(e) {
  e.preventDefault()
  const mealAdd = {
    meal: meal,
    food_id: e.target.value,
    user_id: currentUser.id
  }
  fetch(`/categories`,{
    method:'POST',
    headers:{'Content-Type': 'application/json'},
    body:JSON.stringify(mealAdd)
  })
  .then(res => {
    if(res.ok){
      res.json().then(mealAdd => {
        setCategories([...categories, mealAdd])
        navigate('/today')
        fetchCurrentUser()
        })
      } else {
          res.json().then(json => setErrors(json.errors))
      }
    }) 
  }

  return (
    <div>
      <button className="foodbutton" value={food.id} onClick={onClick}>{food.name} - {food.brand}</button>
      {servingPage ? <form>
        Serving Size: <input type="text" placeholder={servingSize} name="servingSize" value={servingSize} className="servingSizeInput" onChange={handleChange} />
        <br/>
        <input type="submit" className="submitServSize" value="Add" />
      </form> : null}
      <br/>
    </div>
  );
}

export default ServingPage;