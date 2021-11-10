import '../App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import { useEffect, useState } from 'react';



function App() {

  const [meals, setMeals] = useState([])
  const [ingredients, setIngredients] = useState([])
  const [macros, setMacros] = useState({})
  const [categories, setCategories] = useState([])

  

  useEffect(() => {

    fetch('http://localhost:9292/meals')
    .then(r => r.json())
    .then(meals => {
      setMeals(meals)
    })

    fetch('http://localhost:9292/ingredients')
    .then(r => r.json())
    .then(ingredients => setIngredients(ingredients))

    fetch('http://localhost:9292/categories')
    .then(r => r.json())
    .then(categories => setCategories(categories))
  }, [])

  useEffect(() => {
    const getMacroSummary = (meals) => {
      const macrosArray = meals.map(meal => getExchanges(meal))
      let macrosObj = {protein: 0, fat: 0, fruit: 0, starch: 0, vegetable: 0}
      for(const macro in macrosObj) {
        macrosObj[macro] = sumOfOneMacro(macrosArray, macro)
      }
      return macrosObj;
    }

    if (meals.length > 0) {
      return setMacros(getMacroSummary(meals))
    }
  }, [meals])

  
  const addMeal = (formData) => {
    
    const mealIngs = new Map()
    formData.ingredients.forEach(mealIng => mealIngs.set(mealIng.ingredient_id.toString(), parseInt(mealIng.portion_quantity)))

    const mapToObj = m => {
      return Array.from(m).reduce((obj, [key, value]) => {
        obj[key] = value;
        return obj;
      }, {});
    };

    const updatedFormData = {...formData, ingredients: mapToObj(mealIngs)}
    debugger
    fetch('http://localhost:9292/meals', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedFormData)
    })
    .then(r => r.json())
    .then(meal => setMeals([...meals, meal]))
  }

  const handleRemoveMeal = (id) => {
    fetch("http://localhost:9292/meals/" + id, {
      method: 'DELETE',
    })
    .then(r => r.json())
    .then(deletedMeal => setMeals(meals.filter(meal => meal.id !== deletedMeal.id)))
  }

  const getExchanges = (meal) => {
    let exchanges = {protein: 0, fat: 0, fruit: 0, starch: 0, vegetable: 0}
  
    meal.meal_ingredients.forEach ((ingredient) => { 
      if (ingredient.ingredient.macro === 'protein') {
        exchanges.protein += ingredient.quantity
      }else if(ingredient.ingredient.macro === 'fat') {
        exchanges.fat += ingredient.quantity
      }else if(ingredient.ingredient.macro === 'fruit') {
        exchanges.fruit += ingredient.quantity
      }else if(ingredient.ingredient.macro === 'starch') {
        exchanges.starch += ingredient.quantity
      }else if(ingredient.ingredient.macro === 'vegetable') {
        exchanges.vegetable += ingredient.quantity
      }
    })
    return exchanges;
  }

  const sumOfOneMacro = (arrayOfObjects, key) => {
    let initialValue = 0
    let sum = arrayOfObjects.reduce(
      (previousValue, currentValue) => previousValue + currentValue[key], initialValue)
    return sum
  }

  

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={
          <Home 
            meals={meals} 
            getExchanges={getExchanges} 
            macros={macros}
            ingredients={ingredients}
            addMeal={addMeal}
            categories={categories}
            handleRemoveMeal={handleRemoveMeal}
          />
        }>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
