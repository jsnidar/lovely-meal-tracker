import { React, useState }from 'react';
import { Container, Row, Col, CardGroup, Stack, Button } from 'react-bootstrap';
import MealCard from './MealCard';
import MealsSummary from './MealsSummary';
import AddMealForm from './AddMealForm';

const Home = ({ categories, meals, getExchanges, macros, ingredients, addMeal, handleRemoveMeal }) => {

  const renderMeals = meals.map((meal) => <MealCard categories={categories} key={meal.id} meal={meal} getExchanges={getExchanges} handleRemoveMeal={handleRemoveMeal} />)
  const [show, setShow] = useState(false);
  const handleShowModal = () => setShow(true)
  const handleCloseModal = () => setShow(false)

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
              <Container>
                <Stack gap={3}>
                  <h2>Daily Exchanges Goal</h2>
                  <ul>
                    <li>Protein: 12</li>
                    <li>Fat: 6</li>
                    <li>Total Carbs: 8</li>
                    <ul>
                      <li>Starch: 6</li>
                      <li>Fruit: 2</li>
                    </ul>
                    <li>Vegetables: 6</li>
                  </ul>
                </Stack>
              </Container>
            </Col>
          </Row>
          <Row>
            <Button variant="warning" onClick={handleShowModal}>
              Add a Meal
            </Button>
            <AddMealForm 
              show={show} 
              ingredients={ingredients}
              handleCloseModal={handleCloseModal}
              addMeal={addMeal}
            />
          </Row>
          <Row>
            <h2>Meals</h2>
          </Row>
          <Row>
            <CardGroup>
              {renderMeals}
            </CardGroup>
          </Row>
          <Row></Row>
        </Stack>
      </Container>
    </div>
  );
}

export default Home;