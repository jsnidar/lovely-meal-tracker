import React from 'react';
import { Form } from 'react-bootstrap';

const MacrosDropdown = ({ ingredients }) => {
  let macros = []
  ingredients.forEach( ingredient => {
    if(!macros.includes(ingredient.macro)) {
      macros.push(ingredient.macro)
    }
  })

  const renderMacros = macros.map( macro => <option key={macro} value={macro}>{macro}</option>)

  return (
    <Form.Group className="mb-3" controlId="formIngredient">
      <Form.Label>Macros</Form.Label>
      <Form.Select aria-label="Ingredients">
        <option>Select a macro</option>
        {renderMacros}
      </Form.Select>
    </Form.Group>
  )
}

export default MacrosDropdown;