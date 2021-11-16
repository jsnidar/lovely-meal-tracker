import { React, useState, useEffect } from 'react';
import { Stack, Form, Button, FloatingLabel, Container } from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom';
import FormIngredients from './FormIngredients';

const AddMealForm = ({ categories, ingredients, addMeal, updateMeal }) => {
  
  
  const [formData, setFormData] = useState({
    name: '',
    description: "",
    image: "",
    category_id: 0,
    meal_ingredients: [],
    id: null
  })

  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {

    if(id) {
      const updatedId = parseInt(id, 10)
      fetch(`http://localhost:9292/meals/${updatedId}`)
      .then(r => r.json())
      .then(meal =>
        setFormData({
        name: meal.name,
        description: meal.description,
        image: meal.image,
        category_id: meal.category_id,
        meal_ingredients: meal.meal_ingredients,
        id: meal.id
      }))
    }
  }, [id])

  const updateIngredient = (updatedIngredients) => {
    setFormData({...formData, meal_ingredients: updatedIngredients})
  }
  
  const removeIngredient = (updatedIngredients) => {
    setFormData({...formData, meal_ingredients: updatedIngredients})
  }

  const handleSaveMeal = (e, id) => {
    e.preventDefault()
    id ? updateMeal(formData) : addMeal(formData)
    setFormData({
      name: '',
      description: "",
      image: "",
      category_id: 0,
      meal_ingredients: [],
      id: null
    })
    
    navigate('/')
  }


  const renderCategories = categories.map(category => {
    const formattedName = category.name[0].toUpperCase() + category.name.slice(1)
    return <option key={category.id} value={category.id}>{formattedName}</option>
  })

  return (
    <Container>
      <Stack gap={3}>
        <Form>
          <h2>{id ? "Update Meal" : "Add a Meal"}</h2>
          <FloatingLabel
            controlId="floatingInput"
            label="Name"
            className="mb-3"
          >
            <Form.Control 
              type="text" 
              value={formData.name} 
              onChange={e => setFormData({...formData, name: e.target.value})} placeholder="Enter meal name" 
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Description"
            className="mb-3"
          >
            <Form.Control 
              type="text" 
              value ={formData.description} 
              onChange={e => setFormData({...formData, description: e.target.value})} placeholder="Enter description" 
            />
          </FloatingLabel>

          <FloatingLabel controlId="floatingSelect" label="Meal Type">
            <Form.Select 
              value={formData.category_id} 
              onChange={e => setFormData({...formData, category_id: e.target.value})} aria-label="Meal Type"
            >
              <option>Select a meal type</option>
              {renderCategories}
            </Form.Select>
          </FloatingLabel>
          <br></br>
          <FormIngredients 
            updateIngredient={updateIngredient} 
            formData={formData} 
            ingredients={ingredients}
            removeIngredient={removeIngredient}
          />
          <br></br>
          <Button type='submit' variant='warning' onClick={e => handleSaveMeal(e, formData.id)}>Save Meal</Button>
        </Form>
      </Stack>
    </Container>
        
  )
}

export default AddMealForm;