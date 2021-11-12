import React from 'react';
import { Form } from 'react-bootstrap';

const IngredientsDropdown = ({ ingredientId, ingredients, handleIngredientSelect }) => {

  const renderIngredients = ingredients.map( ingredient => {
    const unit = ingredient.portion_unit === 'each' ? '' : ingredient.portion_unit + ' '
    const dropDownText = `${ingredient.portion_quantity} ${unit}${ingredient.name}`
    return <option
      key={ingredient.id} 
      value={ingredient.id}
    >{dropDownText}</option>
  })
  console.log('ing id ', ingredientId)
  console.log('ingredients', ingredients)
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