import { Card, Row, Col, Divider, Input, Button } from 'antd';
import { OmitProps } from 'antd/lib/transfer/ListBody';
import { useState } from 'react';

function AddFoodForm({ foods, setFoods }) {
    
    //passo 2: criar o state igual objeto da lista
    const [form, setForm] = useState({
        name: '',
        image: '',
        calories: '',
        servings: ''
    })
    
    function handleChange(event) {
        console.log(form);
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault();
        setFoods([...foods, form ]);
        setForm({
            name: '',
            image: '',
            calories: '',
            servings: ''
        });
        // foods.addFood(prevList => [...prevList, form])
    }
        

    return (
        //passo 1: criar o form
        <form>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input onChange={handleChange} type="text" name="name" />

      <label>Image</label>
      <Input onChange={handleChange}  type="text" name="image" />

      <label>Calories</label>
      <Input onChange={handleChange}  type="text" name="calories" />

      <label>Servings</label>
      <Input onChange={handleChange}  type="text" name="servings" />

      <button type="submit" onClick={handleSubmit} >Create</button>
    </form>
    )
}

export default AddFoodForm