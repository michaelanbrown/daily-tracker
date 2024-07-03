import React from "react";

function NewRecipe( { recipes, setRecipes } ) {
    const [errors, setErrors] = useState([])

  return (
    <div>
      <button className="new" onClick={}>Add New Recipe</button>
    </div>
  );
}

export default NewRecipe;