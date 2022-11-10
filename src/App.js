import { Card, Row, Col, Divider, Input, Button } from 'antd';
import './App.css';
import foodsJSON from './foods.json';
import FoodBox from './components/FoodBox';
import { useState } from "react"; 
import AddFoodForm from './components/AddFoodForm';


function App() {

  const [foods, setFoods] = useState(foodsJSON);

  return (
    <div className="App">

      {/* iteration 1
      <h1>Iteration 1</h1>
      <Divider>Food List</Divider>
      <Col style={{ width: '100%', justifyContent: 'center' }}>
        {foods.map(function (food) {
          return (
            <div>
              <p>{food.name}</p>
              <img src={food.image} alt={food.name} width={150} />
            </div>
          )
        })}
      </Col> */}

      {/* iteration 2
      <h1>Iteration 2</h1>
      <Divider>Food Box</Divider>
      <FoodBox food={ {
        name: "Orange",
        calories: 85,
        image: "https://i.imgur.com/abKGOcv.jpg",
        servings: 1
      } } /> */}

      {/* iteration 4*/}
            
      <h1>Iteration 4</h1>
      <AddFoodForm foods={foods} setFoods={setFoods} />


      {/* iteration 3*/}
      
      <h1>Iteration 3</h1>
      <Divider>Food List</Divider>
      <Col style={{ width: '100%', justifyContent: 'center' }}>
        <div style={ {display: "flex", flexWrap: "wrap" }}>
          {foods.map( (f) => {
            return (
              <FoodBox food={ {
                name: f.name,
                calories: f.calories,
                image: f.image,
                servings: f.servings
              } } setFoods={setFoods}/>
            )
            })}
        </div>
      </Col>

      

    </div>
  );
}

export default App;
