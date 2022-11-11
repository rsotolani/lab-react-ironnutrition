import { Row, Divider, Button } from 'antd';
import './App.css';
import foodsJSON from './foods.json';
import FoodBox from './components/FoodBox';
import { useState } from "react"; 
import SearchBar from './components/SearchBar';
import AddFoodForm from './components/AddFoodForm';


function App() {

  const [allFoods, setAllFoods] = useState(foodsJSON);
  const [search, setSearch] = useState('');
  const [showForm, setShowForm] = useState(false);

  function handleShowForm() {
    setShowForm(!showForm);
  }
  console.log(showForm);


  return (
    <div className="App">

      {/* iteration 1
      <h1>Iteration 1</h1>
      <Divider>Food List</Divider>
      <Col style={{ width: '100%', justifyContent: 'center' }}>
        {allFoods.map(function (food) {
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
      <FoodBox allFood={ {
        name: "Orange",
        calories: 85,
        image: "https://i.imgur.com/abKGOcv.jpg",
        servings: 1
      } } /> */}

      

      

      {/* iteration 4*/}     
      {showForm === true && (
        <AddFoodForm allFoods={allFoods} setAllFoods={setAllFoods} />
      )}

      {/* iteration 7*/}     
      <Button onClick={handleShowForm}>{showForm === true ? <span>Hide Form</span> : <span>Add New Food</span> }</Button>

      {/* iteration 5*/}     
      <SearchBar search={search}  setSearch={setSearch}/>


      {/* iteration 3 e 6*/}
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* {allFoods.map((food) => {
            return (
              <FoodBox food={food} foods={allFoods} setFoods={setAllFoods}/>
            )      
          })} */}
          {/* renderizando a lista de comidas */}
        {allFoods
          .filter((food) => {
            return (
              food.name.toLocaleLowerCase().includes(search.toLowerCase()) ||
              String(food.calories).includes(search)
            );
          })
          .map((food) => {
            return (
              <FoodBox
                food={food}
                key={food.name}
                allFoods={allFoods}
                setAllFoods={setAllFoods}
              />
            );
          })}
      </Row>
    </div>
  );
}

export default App;
