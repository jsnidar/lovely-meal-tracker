import React from 'react';
import { Card, Stack, Button, Row, Col } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom'
import MealIngredientsList from './MealIngredientsList';
import MealExchanges from './MealExchanges';

const MealCard = ({ categories, meal, getExchanges, handleRemoveMeal }) => {
  
  let exchanges = getExchanges(meal)
  let category
  if(categories.length > 0) {
    category = categories.find(category => category.id === meal.category_id).name
    category = category[0].toUpperCase() + category.slice(1)
  }
  
  return (
    <div>
      <Card>
        <Card.Body>
        <Stack>
          <Card.Title>{category}</Card.Title>
          <br></br>
          <Card.Subtitle>{meal.name}</Card.Subtitle>
          <Card.Text>
            {meal.description}
          </Card.Text>
          <br></br>
          <Card.Subtitle>Ingredients</Card.Subtitle>
          <MealIngredientsList mealIngredients = {meal.meal_ingredients} />
          <br></br>
          <Card.Subtitle>Exchanges</Card.Subtitle>
          <MealExchanges exchanges={exchanges} />
        </Stack> 
        </Card.Body>
        <Card.Footer>
          <Row>
            <Col>
              <Link to={`/meals/${meal.id}/edit`} >
                <Button variant='warning'>Edit</Button>
              </Link>
            </Col>
            <Col>
              <Button onClick={e => handleRemoveMeal(meal.id)} variant='warning'>Delete</Button>
            </Col>
          </Row>
          </Card.Footer>
      </Card>
      <Outlet />
    </div>
  );
}

export default MealCard;