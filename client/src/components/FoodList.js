import React, { useState } from "react";

function FoodList({ foods }) {
  const [filter, setFilter] = useState('')
  const [filteredFoods, setFilteredFoods] = useState(foods)
//useeffect to set filteredfoods

const foodsMap = foods.map(food => {
  return <div key={food.id}>{food.name} - {food.brand}<br/><br/></div>
})

function handleChange(e) {
  setFilter(e.target.value);
}

  return (
    <div>
      <input type="text" placeholder='Search' name="filter" value={filter} className="input" onChange={handleChange} />
      {foodsMap}
    </div>
  );
}

export default FoodList;