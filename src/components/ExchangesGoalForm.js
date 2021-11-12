import { React, useState } from 'react';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router';

const ExchangesGoalForm = ({ goal, updateGoal }) => {

  const [exchangesGoalFormData, setExchangesGoalFormData] = useState(goal ? goal : {
    protein: 0, 
    fat: 0, 
    starch: 0, 
    fruit: 0, 
    vegetables: 0
  })

  const navigate = useNavigate()

  const handleExhangeGoalSubmit = (e) => {
    e.preventDefault()
    console.log('is it working?')
    updateGoal(exchangesGoalFormData)
    navigate('/');
  }

  const totalCarbs = parseInt(exchangesGoalFormData.starch) + parseInt(exchangesGoalFormData.fruit)
  
  console.log(exchangesGoalFormData)

  return (
    <Container>
      <Form>
        <Row>
          <h2>Set Your Exchanges Goal</h2>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="proteinQuantity">
              <Form.Label>Protein: </Form.Label>
              <Form.Control 
                type="number" 
                defaultValue={goal.protein !== 0 ? goal.protein : 0} 
                onChange={e => setExchangesGoalFormData({...exchangesGoalFormData, protein: e.target.value })}  placeholder="Enter quantity" 
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="fatQuantity">
              <Form.Label>Fat: </Form.Label>
              <Form.Control 
                type="number" 
                defaultValue={goal.fat !== 0 ? goal.fat : 0} 
                onChange={e => setExchangesGoalFormData({...exchangesGoalFormData, fat: e.target.value })} 
                placeholder="Enter quantity"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="vegetablesQuantity">
              <Form.Label>Vegetables: </Form.Label>
              <Form.Control 
                type="number" 
                defaultValue={goal.vegetables !== 0 ? goal.vegetables : 0} 
                onChange={e => setExchangesGoalFormData({...exchangesGoalFormData, vegetables: e.target.value })} 
                placeholder="Enter quantity" 
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Form.Group>
            <Form.Label>Total Carbs: {totalCarbs} </Form.Label>
          </Form.Group>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="starchQuantity">
              <Form.Label>Starch: </Form.Label>
              <Form.Control 
                type="number" 
                defaultValue={goal.starch !== 0 ? goal.starch : 0} 
                onChange={e => setExchangesGoalFormData({...exchangesGoalFormData, starch: e.target.value })} 
                placeholder="Enter quantity" 
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="fruitQuantity">
              <Form.Label>Fruit: </Form.Label>
              <Form.Control 
                type="number" 
                defaultValue={goal.fruit !== 0 ? goal.fruit : 0} 
                onChange={e => setExchangesGoalFormData({...exchangesGoalFormData, fruit: e.target.value })} 
                placeholder="Enter quantity" 
              />
            </Form.Group>
          </Col>
        </Row>
        <Button type='submit' onClick={e => handleExhangeGoalSubmit(e)}>Save Goal</Button>
      </Form>
    </Container>
  )
}

export default ExchangesGoalForm;