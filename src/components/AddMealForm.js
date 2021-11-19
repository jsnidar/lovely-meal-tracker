import { React, useState, useEffect } from 'react';
import { Stack, Row, Col, Form, Button, FloatingLabel, Container } from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom';
import AddIngredient from './AddIngredient';

const AddMealForm = ({ categories, addMeal, updateMeal }) => {
  
  const [ ingredients, setIngredients ] = useState([])
  const [listId, setListId] = useState(1)
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
    
    fetch('http://localhost:9292/ingredients')
      .then(r => r.json())
      .then(ingredients => setIngredients(ingredients))

    if(id) {
      const updatedId = parseInt(id, 10)
      let initialListId = 0

      fetch(`http://localhost:9292/meals/${updatedId}`)
      .then(r => r.json())
      .then(meal => {
        const mealIngredientsWithListIds = meal.meal_ingredients.map(mealIngredient => {
          initialListId++
          return {...mealIngredient, listId: initialListId}
        })

        setFormData({
        name: meal.name,
        description: meal.description,
        image: meal.image,
        category_id: meal.category_id,
        meal_ingredients: mealIngredientsWithListIds, 
        id: meal.id,
        })

        setListId(initialListId)

      }) 
    }
  }, [id])

  const updateIngredient = (ingredientObj) => {
    const updatedIngredients = formData.meal_ingredients.map((ingredient) => {
      if (ingredient.listId === ingredientObj.listId) {
        return ingredientObj
      }
      return ingredient
    })
    setFormData({...formData, meal_ingredients: updatedIngredients})
  }
  
  const removeIngredient = (ingredientObj) => {
    const updatedIngredients = formData.meal_ingredients.filter((ingredient) => ingredient.listId !== ingredientObj.listId)
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
  
  const addIngredient = () => {

    setFormData({...formData, meal_ingredients: [
      ...formData.meal_ingredients, {
        listId: listId, 
        ingredient_id: 0, 
        quantity: 0, 
        macro: ''
      }
    ]})
    setListId(listId + 1)

  }

  const renderIngredients = formData.meal_ingredients.map(mealIngredient => <AddIngredient 
    key={mealIngredient.listId} 
    mealIngredient={mealIngredient} 
    ingredients={ingredients} 
    listId={listId - 1} 
    updateIngredient={updateIngredient} 
    removeIngredient={removeIngredient} 
  />)

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
          <Row>
            <Col>Macros</Col>
            <Col>Ingredients</Col>
            <Col>Quantity</Col>
            <Col xs={1}></Col>
          </Row>
          <Row>
            <br></br>
          </Row>
            {renderIngredients}
          <Row>
            <br></br>
            <Button 
              variant='warning' 
              onClick={addIngredient}
            >Add Ingredient</Button>
          </Row>
          <br></br>
          <Button type='submit' variant='warning' onClick={e => handleSaveMeal(e, formData.id)}>Save Meal</Button>
        </Form>
      </Stack>
    </Container>
        
  )
}

export default AddMealForm;