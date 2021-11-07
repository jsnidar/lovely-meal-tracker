import React from 'react';
import { useState } from 'react';
import IngredientsDropdown from './IngredientsDropdown';
import MacrosDropdown from './MacrosDropdown';
import { Row, Col, Form } from 'react-bootstrap';

const AddIngredient = ({ ingredients }) => {
  const [macro, setMacro] = useState('')
  const [ingredient, setIngredient] = useState(0)

  console.log(ingredient)
  return (
    <Row>
      <Col>
        <MacrosDropdown setMacro={setMacro} ingredients={ingredients} />
      </Col>
      <Col>
        <IngredientsDropdown setIngredient={setIngredient} ingredients={ingredients} />
      </Col>
      <Col>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Quantity</Form.Label>
          <Form.Control type="number" placeholder="Enter quantity" />
        </Form.Group>
      </Col>
    </Row>
  )
}

export default AddIngredient;