import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { useCurrentUser } from "./context/User";
import ServingPage from "./ServingPage";

function FoodList({ foods, meal, categories, setCategories }) {
  const [filter, setFilter] = useState('')
  const [foodFilter, setFoodfilter] = useState(foods)
  const [foodsMap, setFoodsMap] = useState([])
  const [errors, setErrors] = useState([])
  const [servingSize, setServingSize] = useState(1)
  const [servingPage, setServingPage] = useState(false)
  const navigate = useNavigate()
  const { currentUser, fetchCurrentUser } = useCurrentUser()
//create ability to do partial food

function onServings(e) {

}

function onClick() {
  setServingPage(!servingPage)
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


useEffect(() => {
  const mealPresent = meal ? null : navigate("/today")
  const map = setFoodsMap(foodFilter.map(food => {
    return <ServingPage/>
  })) // replace onAdd
  setFoodfilter(filter ? foodFilter : foods)
},[foods, foodFilter])

function handleChange(e) {
  setFilter(e.target.value);
  setFoodfilter(foods.filter(food => food.name.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1 || food.brand.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1))
}

function newFood() {
  navigate("/newfood")
}

  return (
    <div>
      <button className="new" onClick={newFood}>Add New Food</button>
      <input type="text" placeholder='Search' name="filter" value={filter} className="input" onChange={handleChange} />
      <br/>
      <br/>
      {foodsMap}
      { errors ? <br/> : null }
      { errors.length !==0 ? <div className='error' >
      { errors ? errors.map(error => <div key={error}>{error}</div>) : null }
      </div> : null }
    </div>
  );
}

export default FoodList;