import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import { useCurrentUser } from "./context/User";

function ServingPage({ food, meal, categories, setCategories }) {
const [servingPage, setServingPage] = useState(false)
const [servingSize, setServingSize] = useState(1)
const [errors, setErrors] = useState([])
const { currentUser, fetchCurrentUser } = useCurrentUser()
const navigate = useNavigate()

//add serving determination to front-end, servingSize needs to be recognized as a number

function onClick() {
  setServingPage(!servingPage)
}

function handleChange(e) {
  setServingSize(Number(e.target.value))
}

function onAdd(e) {
  e.preventDefault()
  const mealAdd = {
    meal: meal,
    food_id: food.id,
    user_id: currentUser.id,
    servings: Number(servingSize)
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
      {servingPage ? <form onSubmit={onAdd}>
        Serving Size: <input type="text" placeholder={servingSize} name="servingSize" value={servingSize} className="servingSizeInput" onChange={handleChange} />
        <br/>
        <input type="submit" className="submitServSize" value="Add" />
      </form> : null}
      { errors ? <br/> : null }
      { errors.length !==0 ? <div className='error' >
        { errors ? errors.map(error => <div key={error}>{error}</div>) : null }
      </div> : null }
      <br/>
    </div>
  );
}

export default ServingPage;