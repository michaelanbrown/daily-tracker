import React, { useState, useEffect } from "react";

function FoodList({ foods }) {
  const [filter, setFilter] = useState('')
  const [filteredFoods, setFilteredFoods] = useState(foods)
//useeffect to set filteredfoods

useEffect(() => {
  
},[foods, filteredFoods])

const foodsMap = foods.map(food => {
  return <div key={food.id}>{food.name} - {food.brand}<br/><br/></div>
})

function handleChange(e) {
  setFilter(e.target.value);
  setFilteredFoods(foods.filter(food => food.name.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1 || food.brand.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1))
}

  return (
    <div>
      <input type="text" placeholder='Search' name="filter" value={filter} className="input" onChange={handleChange} />
      {foodsMap}
    </div>
  );
}

export default FoodList;