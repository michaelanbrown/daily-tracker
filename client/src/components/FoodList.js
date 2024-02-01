import React, { useState, useEffect } from "react";

function FoodList({ foods }) {
  const [filter, setFilter] = useState('')
  const [foodFilter, setFoodfilter] = useState(foods)
  const [foodsMap, setFoodsMap] = useState([])
//useeffect to set filteredfoods

useEffect(() => {
  const map = setFoodsMap(foodFilter.map(food => {
    return <div key={food.id}>{food.name} - {food.brand}<br/><br/></div>
  }))
},[foods, foodFilter])

function handleChange(e) {
  setFilter(e.target.value);
  setFoodfilter(foods.filter(food => food.name.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1 || food.brand.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1))
}

  return (
    <div>
      <input type="text" placeholder='Search' name="filter" value={filter} className="input" onChange={handleChange} />
      {foodsMap}
    </div>
  );
}

export default FoodList;