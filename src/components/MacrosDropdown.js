import React from 'react';
import { Form } from 'react-bootstrap';

const MacrosDropdown = ({ macros, macro, selectMacro }) => {
  const renderMacros = macros.map(macro => <option key={macro} value={macro}>{macro}</option>)

  return (
    <Form.Group className="mb-3" controlId="formIngredient">
      <Form.Select defaultValue={macro ? macro : ''} onChange={selectMacro} aria-label="Ingredients">
        <option>Select a macro</option>
        {renderMacros}
      </Form.Select>
    </Form.Group>
  )
}

export default MacrosDropdown;