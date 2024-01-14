import React, { useState } from "react";

function NewFood({ }) {
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    calories: '',
    fats: '',
    sugars: '',
    added_sugars: '',
    protein: ''
  })

  function handleChange(e) {
    setFormData({
        ...formData,
        [e.target.name] : e.target.value
    });
}

  return (
    <div>
      <form>
        <input type="text" placeholder='Food' name="name" value={name} className="input" onChange={handleChange}/>
          <br/>
      </form>
    </div>
  );
}

export default NewFood;