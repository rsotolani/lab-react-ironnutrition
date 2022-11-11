import { Divider, Input } from 'antd';
import { useState } from 'react';


function AddFoodForm({ allFoods, setAllFoods }) {
    
    //passo 2: criar o state igual objeto da lista
    const [form, setForm] = useState({
        name: '',
        image: '',
        calories: '',
        servings: '',
      });
    
    // function handleChange(event) {
    //     console.log(form);
    //     setForm({ ...form, [event.target.name]: event.target.value })
    // }
    function handleChange(e) {
        console.log(e.target.name); // -> me trás o nome do input -> o nome da minha key do obj form
        console.log(e.target.value); // -> me trás a tecla pressionada!
    
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    console.log(form);
    

    function handleSubmit(e) {
        e.preventDefault();
        //é responsável por guardar o form preenchido em algum lugar -> allFoods
        setAllFoods([...allFoods, form]);
    
        setForm({
          name: '',
          image: '',
          calories: '',
          servings: '',
        });
      }
        

    return (
        //passo 1: criar o form
        <form>
            <Divider>Add Food Entry</Divider>

            <label>Name</label>
            <Input onChange={handleChange} type="text" value={form.name} name="name" />

            <label>Image</label>
            <Input onChange={handleChange}  type="text" value={form.image} name="image" />

            <label>Calories</label>
            <Input onChange={handleChange}  type="text" value={form.calories} name="calories" />

            <label>Servings</label>
            <Input onChange={handleChange}  type="text" value={form.servings} name="servings" />

            <button onClick={handleSubmit} >Salvar food</button>
    </form>
    )
}

export default AddFoodForm