import React from 'react';
import { Form } from 'react-bootstrap';

const IngredientsDropdown = ({ ingredientId, ingredients, handleIngredientSelect }) => {
  const renderIngredients = ingredients.map( ingredient => <option key={ingredient.id} value={ingredient.id}>{ingredient.portion_quantity} {ingredient.portion_unit} {ingredient.name}</option>)
 
  return (
    <Form.Group className="mb-3" controlId="formIngredient">
      <Form.Select defaultValue={ingredientId ? ingredientId : 0 } onChange={handleIngredientSelect} aria-label="Ingredients">
        <option>Select an ingredient</option>
        {renderIngredients}
      </Form.Select>
    </Form.Group>
  )
}

export default IngredientsDropdown;