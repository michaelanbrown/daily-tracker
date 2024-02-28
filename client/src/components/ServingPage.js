import React from "react";

function ServingPage({ food, onAdd, servingPage, onClick }) {


  return (
    <div>
      <button className="foodbutton" value={food.id} onClick={onClick}>{food.name} - {food.brand}</button>
      <br/>
    </div>
  );
}

export default ServingPage;