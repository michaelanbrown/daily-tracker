import React from "react";

function Food({ foods, setFoods }) {
  const foodMap = foods.map(food => {
    <div></div>
  })

  return (
    <div>
      {foodMap}
    </div>
  );
}

export default Food;