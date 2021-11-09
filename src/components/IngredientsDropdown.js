import React from 'react';
import { Form } from 'react-bootstrap';

const IngredientsDropdown = ({ ingredients, handleIngredientSelect }) => {
  const renderIngredients = ingredients.map( ingredient => <option key={ingredient.id} value={ingredient.id}>{ingredient.portion_quantity} {ingredient.portion_unit} {ingredient.name}</option>)

  
  return (
    <Form.Group onChange={handleIngredientSelect} className="mb-3" controlId="formIngredient">
      <Form.Select aria-label="Ingredients">
        <option>Select an ingredient</option>
        {renderIngredients}
      </Form.Select>
    </Form.Group>
  )
}

export default IngredientsDropdown;