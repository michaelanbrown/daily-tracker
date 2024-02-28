import React from "react";

function ServingPage({ food, onAdd, servingPage }) {
const [servingPage, setServingPage] = useState(false)
console.log(servingPage)

function onClick() {
  setServingPage(!servingPage)
}

  return (
    <div>
      <button className="foodbutton" value={food.id} onClick={onClick}>{food.name} - {food.brand}</button>
      <br/>
    </div>
  );
}

export default ServingPage;