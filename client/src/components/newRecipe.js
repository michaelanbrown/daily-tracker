import React from "react";

function NewRecipe( { recipes, setRecipes } ) {
    const navigate = useNavigate();
    const [errors, setErrors] = useState([])
    const [formdata, setFormdata] = useState({})

    function addRecipe(e) {
        e.preventDefault();
        const recipe = {
          name,
          calories,
          fats,
          carbs,
          sugars,
          added_sugars,
          protein
        }
        fetch(`/recipes`, {
         method: 'POST',
         headers: {
          "Content-Type" : "application/json"
         },
        body: JSON.stringify(recipe)
      }).then(res => {
        if (res.ok) {
          res.json().then(recipe => {
            setRecipes([...recipes, recipe])
            navigate(`/recipes`)
          })
        } else {
          res.json().then(json => setErrors(json.errors))
        }}
      )}

  return (
    <div>
      <button className="new" onClick={addRecipe}>Add New Recipe</button>
    </div>
  );
}

export default NewRecipe;