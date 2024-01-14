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

  return (
    <div>
      <form>
        <input type="text" placeholder='Food' name="name" value={name} className="input" />
          <br/>
      </form>
    </div>
  );
}

export default NewFood;