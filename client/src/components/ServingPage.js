import React from "react";

function ServingPage({ food, onAdd }) {

  return (
    <div>
      <button className="foodbutton" value={food.id} onClick={onClick}>{food.name} - {food.brand}</button>
    </div>
  );
}

export default ServingPage;