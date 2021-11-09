import React from 'react';
import { Card, Stack, Button } from 'react-bootstrap';
import MealIngredientsList from './MealIngredientsList';
import MealExchanges from './MealExchanges';

const MealCard = ({ categories, meal, getExchanges }) => {
  
  let exchanges = getExchanges(meal)
  let category
  if(categories.length > 0) {
    category = categories.find(category => category.id === meal.category_id).name
    category = category[0].toUpperCase() + category.slice(1)
  }
  

  return (
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
          <Button variant='warning'>Edit Meal</Button>
        </Card.Footer>
    </Card>
  );
}

export default MealCard;