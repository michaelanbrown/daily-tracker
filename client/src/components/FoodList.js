import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { useCurrentUser } from "./context/User";

function FoodList({ foods, meal }) {
  const [filter, setFilter] = useState('')
  const [foodFilter, setFoodfilter] = useState(foods)
  const [foodsMap, setFoodsMap] = useState([])
  const navigate = useNavigate()
  const { currentUser, fetchCurrentUser } = useCurrentUser()

//finish onadd function

function onAdd(e) {
  e.preventDefault()
  const mealAdd = {
    category: meal,
    food_id: e.target.value,
    user_id: currentUser.id
  }
  fetch(`/categories`,{
    method:'POST',
    headers:{'Content-Type': 'application/json'},
    body:JSON.stringify(mealAdd)
  })
}

useEffect(() => {
  const mealPresent = meal ? null : navigate("/today")
  const map = setFoodsMap(foodFilter.map(food => {
    return <div key={food.id}><button className="foodbutton" value={food.id} onClick={onAdd}>{food.name} - {food.brand}</button><br/><br/></div>
  }))
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
    </div>
  );
}

export default FoodList;