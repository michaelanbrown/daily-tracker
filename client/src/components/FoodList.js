import React from "react";

function FoodList({ foods }) {
//search for food or add new food
console.log(foods)

const foodsMap = foods.map(food => {
  return <div key={food.id}>{food.name} - {food.brand}</div>
})

  return (
    <div>
      {foodsMap}
    </div>
  );
}

export default FoodList;