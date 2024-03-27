import React, { useState } from "react";

function BreakfastMap({ food, category, currentCategories, setCurrentCategories }) {
  const [showMeal, setShowMeal] = useState(false)
  const [plus, setPlus] = useState("+")
  const [edit, setEdit] = useState(false)
  const [servingAmount, setServingAmount] = useState(category.servings)

  //add ability to edit a category's servings - update method complete

  function foodInformation() {
    setShowMeal(!showMeal)
    plus === "+" ? setPlus("-") : setPlus("+")
  }

  function onEdit() {
    setEdit(!edit)
  }

  function handleChange(e) {
    e.preventDefault()
    setServingAmount(e.target.value)
  }

  function deleteCategory(deletedCategory) {
    const deletingCategory = currentCategories.filter(category => {
      if (category.id !== deletedCategory.id) {
        return deleteCategory
      }
    })
    setCurrentCategories(deletingCategory)
  }

  function handleDelete() {
    fetch(`categories/${category.id}`, {
      method:"DELETE"
    })
    .then(res =>{
      if(res.ok){
        window.location.reload()
        deleteCategory(category)
      }
      else {
        res.json().then(json => console.log([json.errors]))
      }
    })
  }

  function updateCategory(updatedCategory) {
    const updatingCategory = currentCategories.map(category => {
      if (category.id === updatedCategory.id) {
        return updatedCategory
      } else {
        return category
      }
    })
    setCurrentCategories(updatingCategory)
  }

  function handleEdit(e) {
    e.preventDefault();
    fetch(`categories/${category.id}`, {
      method: "PATCH",
      headers: {
          "Content-Type" : "application/json",
          "Accept" : "application/json"
      },
      body: JSON.stringify(servingAmount)
    }).then(res => {
      if (res.ok) {
        res.json().then(category => {
          updateCategory(category)
          window.location.reload()
          }          
        )
      }
    })
  }

  return (
    <div>
      <div className="mealMap">• { food.name }{" "}<button className="plus" onClick={foodInformation}>{plus}</button></div>
      { showMeal && edit === false ?
      <div className= "food">
        Servings: {category.servings}
        <br/>
        {food.calories === 0 ? `Calories: 0` : `Calories: ${ food.calories * category.servings }`}
        <br/>
        {food.fats === 0 ? `Fat: 0 g` : `Fat: ${ food.fats * category.servings } g`}
        <br/>
        {food.carbs === 0 ? `Carbohydrates: 0 g` : `Carbohydrates: ${ food.carbs * category.servings } g`}
        <br/>
        {food.sugars === 0 ? `Sugars: 0 g` : `Sugars: ${ food.sugars * category.servings } g`}
        <br/>
        <div className="mealMapAddedSugar">
          {food.added_sugars === 0 ? `Added Sugars: 0 g` : `Added Sugars: ${ food.added_sugars * category.servings } g`}
        </div>
        {food.protein === 0 ? `PRoetin: 0 g` : `Protein: ${ food.protein * category.servings } g`}
        <br/>
        <div><button className="editDelete" onClick={onEdit}>Edit</button>{" "}<button className="editDelete" onClick={handleDelete}>Delete</button></div>
      </div>
      : null}
      { showMeal && edit === true ?
      <div className= "food">
        <form onSubmit={handleEdit}>
      Servings: <input type="text" placeholder='Servings' name="userservingsname" value={servingAmount} className="servingInput" onChange={handleChange} />{" "}<button className="editDelete">Submit</button>
      </form>
      {food.calories === 0 ? `Calories: 0` : `Calories: ${ food.calories * category.servings }`}
      <br/>
      {food.fats === 0 ? `Fat: 0 g` : `Fat: ${ food.fats * category.servings } g`}
      <br/>
      {food.carbs === 0 ? `Carbohydrates: 0 g` : `Carbohydrates: ${ food.carbs * category.servings } g`}
      <br/>
      {food.sugars === 0 ? `Sugars: 0 g` : `Sugars: ${ food.sugars * category.servings } g`}
      <br/>
      <div className="mealMapAddedSugar">
        {food.added_sugars === 0 ? `Added Sugars: 0 g` : `Added Sugars: ${ food.added_sugars * category.servings } g`}
      </div>
      {food.protein === 0 ? `PRoetin: 0 g` : `Protein: ${ food.protein * category.servings } g`}
      <br/>
      <div><button className="editDelete" onClick={onEdit}>Edit</button>{" "}<button className="editDelete" onClick={handleDelete}>Delete</button></div>
    </div>
      : null} 
    </div>
  );
}

export default BreakfastMap;