import { React }from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Stack, Button } from 'react-bootstrap';
import MealCard from './MealCard';
import MealsSummary from './MealsSummary';

const Home = (
  { 
    goal, 
    categories,
    meals,
    getExchanges, 
    macros, 
    handleRemoveMeal,
  }) => {

  const renderMeals = meals.map((meal) => <MealCard 
    class="mh-75"
    categories={categories} 
    key={meal.id} 
    meal={meal} 
    getExchanges={getExchanges} 
    handleRemoveMeal={handleRemoveMeal} 
  />)

  const renderGoal = <Container>
    <Stack gap={3}>
      <h2>Daily Exchanges Goal</h2>
      <ul>
        <li>Protein: {goal.protein !== 0 ? goal.protein : 'none'}</li>
        <li>Fat: {goal.fat !== 0 ? goal.fat : 'none'}</li>
        <li>Total Carbs: {goal.starch !== 0 || goal.fruit !== 0 ? parseInt(goal.starch) + parseInt(goal.fruit) : 'none'}</li>
        <ul>
          <li>Starch: {goal.starch !== 0 ? goal.starch : 'none'}</li>
          <li>Fruit: {goal.fruit !== 0 ? goal.fruit : 'none'}</li>
        </ul>
        <li>Vegetables: {goal.vegetables !== 0 ? goal.vegetables : 'none'}</li>
      </ul>
    </Stack>
  </Container>
  return (
    <div>
      <Container>
        <Stack gap={3}>
          <Row></Row>
          <Row>
            <h1>Daily Exchange Tracker</h1>
          </Row>
          <Row>
            <Col>
              <MealsSummary macros={macros}/>
            </Col>
            <Col>
              {renderGoal}
            </Col>
          </Row>
          <Row>
            <Col>
              <Link to={"/meals/new"} >
                <Button variant="warning" >Add a Meal</Button>
              </Link>
            </Col>
            <Col>
              <Link to={'/goal/edit'}>
                <Button variant="warning">Set Goal</Button>
              </Link>
            </Col>
          </Row>
          <Row>
            <h2>Meals</h2>
          </Row>
          <Row xs={1} md={2} lg={3} xl={4} className="g-4">
            {renderMeals}
          </Row>
          <Row></Row>
        </Stack>
      </Container>
    </div>
  );
}

export default Home;