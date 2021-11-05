import React from 'react';
import { Form, Button, FloatingLabel } from 'react-bootstrap'

const AddMealForm = () => {

  return (
    <Form>
      <h2>Add a Meal</h2>
      <FloatingLabel
        controlId="floatingInput"
        label="Name"
        className="mb-3"
        >
        <Form.Control type="text" placeholder="Enter meal name" />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="Description"
        className="mb-3"
        >
        <Form.Control type="text" placeholder="Enter description" />
      </FloatingLabel>

      <FloatingLabel controlId="floatingSelect" label="Meal Type">
        <Form.Select aria-label="Meal Type">
          <option>Select a meal type</option>
          <option value="1">Breakfast</option>
          <option value="2">Lunch</option>
          <option value="3">Dinner</option>
          <option value="4">Snack</option>
        </Form.Select>
      </FloatingLabel>

      <Form.Group className="mb-3" controlId="formIngredient">
        <Form.Label>Ingredients</Form.Label>
        <Form.Control type="text" placeholder="Enter description" />
      </Form.Group>

      <Button variant="warning" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default AddMealForm;