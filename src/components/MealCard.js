import React from 'react';
import { Card, Stack, Button } from 'react-bootstrap';
import MealIngredientsList from './MealIngredientsList';
import MealExchanges from './MealExchanges';

const MealCard = ({ meal, getExchanges }) => {
  
  let exchanges = getExchanges(meal)
  
  const category = () => {
    if (meal.category_id === 1) {
      return 'Breakfast'
    }else if(meal.category_id === 2) {
       return 'Lunch'
    }else if(meal.category_id === 3) {
       return 'Dinner'
    }else{
      return "Snack"
    }
  }

  return (
    <Card>
      <Card.Body>
      <Stack>
        <Card.Title>{category()}</Card.Title>
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