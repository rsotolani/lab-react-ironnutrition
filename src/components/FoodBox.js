import { Card, Col, Button } from 'antd';

function FoodBox({food, foods, setFoods}) {

    function handleDelete(e) {
        console.log(e.target);

        let filteredFoods = foods.filter((f) => {
            return f.name !== e
        })
        setFoods(filteredFoods);

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
                    <strong>Total Calories: {food.calories} * {food.servings} </strong>
                </p>
                <Button type="primary" onClick={() => handleDelete(food.name)}>Delete</Button>
            </Card>
        </Col>
    )
}

export default FoodBox

