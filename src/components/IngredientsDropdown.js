import React from 'react';
import { Form } from 'react-bootstrap';

const IngredientsDropdown = ({ setIngredient, ingredients }) => {
  const renderIngredients = ingredients.map( ingredient => <option key={ingredient.id} value={ingredient.id}>{ingredient.name}</option>)

  
  return (
    <Form.Group onChange={e => setIngredient(e.target.value)} className="mb-3" controlId="formIngredient">
      <Form.Label>Ingredients</Form.Label>
      <Form.Select aria-label="Ingredients">
        <option>Select an ingredient</option>
        {renderIngredients}
      </Form.Select>
    </Form.Group>
  )
}

export default IngredientsDropdown;