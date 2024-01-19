import React from "react";

function Today({ users, foods, categories }) {

  

  return (
    <div>
      <button class="submit">Add Food</button>
        <h4>Breakfast</h4>
        <h4>Lunch</h4>
        <h4>Dinner</h4>
        <h4>Snacks</h4>
    </div>
  );
}

export default Today;