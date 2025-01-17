import { Card, Col, Button } from 'antd';

function FoodBox({food, allFoods, setAllFoods}) {

    function handleDelete(foodSelect) {
        // let filteredFoods = allFoods.filter((f) => {
        //     return f.name !== e
        // })
        // setAllFoods(filteredFoods);
        console.log(foodSelect); // o nome da food que eu cliquei!!
    
        let filteredFoods = allFoods.filter((food) => {
            return food.name !== foodSelect;
        });
    
        setAllFoods(filteredFoods);
    }
    return (
        <Col>
            <Card
                title={food.name}
                style={{ width: 230, height: 300, margin: 10}}
            >
                <img src={food.image} height={60} alt={food.name} />
                <p>Calories: {food.calories}</p>
                <p>Servings: {food.servings}</p>
                <p>
                    <strong>Total Calories: {food.calories * food.servings} </strong>
                </p>
                <Button type="primary" onClick={() => handleDelete(food.name)}>Delete</Button>
            </Card>
        </Col>
    )
}

export default FoodBox

