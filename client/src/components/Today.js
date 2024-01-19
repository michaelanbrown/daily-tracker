import React from "react";

function Today({ users, foods, categories }) {

  

  return (
    <div>
      <button class="submit">Add Food</button>
        <h2>Breakfast</h2>
        <h2>Lunch</h2>
        <h2>Dinner</h2>
        <h2>Snacks</h2>
    </div>
  );
}

export default Today;