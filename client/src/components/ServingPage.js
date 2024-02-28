import React from "react";

function ServingPage({ food, onAdd, servingPage }) {

  function onServings(e) {

  }

  return (
    <div>
      <button className="foodbutton" value={food.id} onClick={onServings}>{food.name} - {food.brand}</button>
      <br/>
    </div>
  );
}

export default ServingPage;