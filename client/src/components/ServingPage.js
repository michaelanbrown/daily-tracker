import React, { useState } from "react";

function ServingPage({ food, onAdd, categories }) {
const [servingPage, setServingPage] = useState(false)
const [servingSize, setServingSize] = useState(1)

//add the onAdd function to the form input, make sure to add the usage of the servingsize and the serving size must be a number, add errors

function onClick() {
  setServingPage(!servingPage)
}

function handleChange(e) {
  setServingSize(e.target.value)
}

  return (
    <div>
      <button className="foodbutton" value={food.id} onClick={onClick}>{food.name} - {food.brand}</button>
      {servingPage ? <form>
        Serving Size: <input type="text" placeholder={servingSize} name="servingSize" value={servingSize} className="servingSizeInput" onChange={handleChange} />
        <br/>
        <input type="submit" className="submitServSize" value="Add" />
      </form> : null}
      <br/>
    </div>
  );
}

export default ServingPage;