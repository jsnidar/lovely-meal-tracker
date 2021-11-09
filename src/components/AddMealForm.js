import { React, useState } from 'react';
import { Form, Button, FloatingLabel } from 'react-bootstrap'
import FormIngredients from './FormIngredients';

const AddMealForm = ({ ingredients }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: "",
    image: "",
    category_id: 0,
    ingredients: {
    }
})
console.log(formData)
  return (
    <Form>
      <h2>Add a Meal</h2>
      <FloatingLabel
        controlId="floatingInput"
        label="Name"
        className="mb-3"
        >
        <Form.Control type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="Enter meal name" />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="Description"
        className="mb-3"
        >
        <Form.Control type="text" value ={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} placeholder="Enter description" />
      </FloatingLabel>

      <FloatingLabel controlId="floatingSelect" label="Meal Type">
        <Form.Select onChange={e => setFormData({...formData, category_id: e.target.value})} aria-label="Meal Type">
          <option>Select a meal type</option>
          <option value="1">Breakfast</option>
          <option value="2">Lunch</option>
          <option value="3">Dinner</option>
          <option value="4">Snack</option>
        </Form.Select>
      </FloatingLabel>


      <FormIngredients ingredients={ingredients} />

      <Button variant="warning" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default AddMealForm;