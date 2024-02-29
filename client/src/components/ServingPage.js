import React, { useState } from "react";

function ServingPage({ food, onAdd }) {
const [servingPage, setServingPage] = useState(false)
const [servingSize, setServingSize] = useState(1)

function onClick() {
  setServingPage(!servingPage)
}

  return (
    <div>
      <button className="foodbutton" value={food.id} onClick={onClick}>{food.name} - {food.brand}</button>
      {servingPage ? <div>
        <input type="text" />
      </div> : null}
      <br/>
    </div>
  );
}

export default ServingPage;