import React, { useState } from "react";

function ServingPage({ food, onAdd }) {
const [servingPage, setServingPage] = useState(false)

function onClick() {
  setServingPage(!servingPage)
}

  return (
    <div>
      <button className="foodbutton" value={food.id} onClick={onClick}>{food.name} - {food.brand}</button>
      {servingPage ? <div>
        </div> : null}
      <br/>
    </div>
  );
}

export default ServingPage;