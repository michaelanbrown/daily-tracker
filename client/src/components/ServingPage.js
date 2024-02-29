import React, { useState } from "react";

function ServingPage({ food, onAdd }) {
const [servingPage, setServingPage] = useState(false)
const [servingSize, setServingSize] = useState(1)

function onClick() {
  setServingPage(!servingPage)
}

function handleChange(e) {
  setServingSize(e.target.value)
}

  return (
    <div>
      <button className="foodbutton" value={food.id} onClick={onClick}>{food.name} - {food.brand}</button>
      {servingPage ? <div>
        Serving Size: <input type="text" placeholder={servingSize} name="servingSize" value={servingSize} className="servingSizeInput" onChange={handleChange} />
        <br/>
        <input type="submit" className="submitServSize" value="Add" />
      </div> : null}
      <br/>
    </div>
  );
}

export default ServingPage;