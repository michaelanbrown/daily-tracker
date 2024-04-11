import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import ServingPage from "./ServingPage";

function FoodList({ foods, meal, categories, setCategories }) {
  const [filter, setFilter] = useState('')
  const [foodFilter, setFoodfilter] = useState(foods)
  const [foodsMap, setFoodsMap] = useState([])
  const navigate = useNavigate()

useEffect(() => {
  const mealPresent = meal ? null : navigate("/today")
  const map = setFoodsMap(foodFilter.map(food => {
    return <ServingPage key={food.id} food={food} categories={categories} meal={meal} setCategories={setCategories}/>
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
      { errors ? <br/> : null }
      { errors.length !==0 ? <div className='error' >
      { errors ? errors.map(error => <div key={error}>{error}</div>) : null }
      </div> : null }
    </div>
  );
}

export default FoodList;