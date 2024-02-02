import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"

function FoodList({ foods }) {
  const [filter, setFilter] = useState('')
  const [foodFilter, setFoodfilter] = useState(foods)
  const [foodsMap, setFoodsMap] = useState([])
  const navigate = useNavigate()

function onAdd() {

}

useEffect(() => {
  const map = setFoodsMap(foodFilter.map(food => {
    return <div key={food.id}><button className="foodbutton" onClick={onAdd}>{food.name} - {food.brand}</button><br/><br/></div>
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