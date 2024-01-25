import React from "react";

function BreakfastMap({ food }) {
  console.log(food)

  function foodInformation() {

  }

  return (
    <div>
      <button className="logout" onClick={foodInformation}>
        <li className="mealMap">{ food.name }</li>
      </button>
    </div>
  );
}

export default BreakfastMap;