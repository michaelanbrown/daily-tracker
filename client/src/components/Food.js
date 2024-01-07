import React from "react";

function Food({ foods, setFoods }) {
  const foodMap = foods.map(food => {
    <div></div>
  })
console.log(foods)
  return (
    <div>
      {foodMap}
    </div>
  );
}

export default Food;