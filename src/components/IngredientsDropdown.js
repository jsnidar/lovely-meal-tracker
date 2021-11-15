import React from 'react';
import { Form } from 'react-bootstrap';

const IngredientsDropdown = ({ ingredientId, ingredients, handleIngredientSelect }) => {


  const renderIngredients = ingredients.map( ingredient => {
    const Fraction = require('fractional').Fraction
    const decimalValue = +(ingredient.portion_quantity).toPrecision(2)
    const quantity = (new Fraction(decimalValue).toString())
    let pluralize = require('pluralize')
    const name = ingredient.portion_unit === 'each' && decimalValue > 1 ? pluralize(ingredient.name, decimalValue): ingredient.name
    let unit = ingredient.portion_unit === 'each' ? '' : ingredient.portion_unit + ' '
    if (unit === 'cup' && decimalValue > 1) {
      unit = pluralize(unit, decimalValue)
    }
    const dropDownText = `${quantity} ${unit} ${name}`
    return <option
      key={ingredient.id} 
      value={ingredient.id}
    >{dropDownText}</option>
  })
  
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