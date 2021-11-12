import React from 'react';
import { Form } from 'react-bootstrap';

const MacrosDropdown = ({ macro, ingredients, handleMacroSelect }) => {
  let macros = [...new Set(ingredients.map(ingredient => ingredient.macro))]
  console.log('macro', macro)
  const renderMacros = macros.map( macro => <option key={macro} value={macro}>{macro}</option>)

  return (
    <Form.Group className="mb-3" controlId="formIngredient">
      <Form.Select defaultValue={macro} onChange={handleMacroSelect} aria-label="Ingredients">
        <option>Select a macro</option>
        {renderMacros}
      </Form.Select>
    </Form.Group>
  )
}

export default MacrosDropdown;