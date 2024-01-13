import React from "react";
import { useEffect, useState } from "react";

function Food({ foods, setFoods }) {
  const [foodsMap, setFoodsMap] = useState([])
  const [foodFilter, setFoodfilter] = useState(foods)
  const [filter, setFilter] = useState('')

  useEffect(() => {
    const mapping = foods ? setFoodsMap(foodFilter.map(food => <div key={food.id}>
      <h4 className="foodName">{food.name}</h4>
      <div className="brand">{food.brand}</div>
      <h4 className= "food">{food.calories} calories</h4>
      <div>{food.fats}g fat
      <br className="break"/>
      {food.carbs}g carbs
      <br className="break"/>
      {food.sugars}g sugar
      <br className="break"/>
      <div className="addedSugar">{food.added_sugars}g added sugar</div>
      {food.protein}g protein</div>
      </div>)) : null
      setFoodfilter(filter ? foodFilter : foods)
  },[foods, foodFilter])

  function handleChange(e) {
    setFilter(e.target.value); 
    setFoodfilter(foods.filter(food => food.name.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1))
  }

  return (
    <div>
      <button class="new">Add New Food</button>
      <input type="text" placeholder='Search' name="filter" value={filter} className="input" onChange={handleChange} />
      <br/>
      {foodsMap}
    </div>
  );
}

export default Food;