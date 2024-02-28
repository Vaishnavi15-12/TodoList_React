import React, { useState } from 'react'
import { toast } from 'react-toastify';

const Form = ({addItem}) => {

    const [newItemName,setItemNewItemName] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!newItemName){
            toast.error('Please provide value');
            return;
        }addItem(newItemName);
        setItemNewItemName('');

    }
    const handleChange = (e) => {
        setItemNewItemName(e.target.value);
    
    }

  return (  
        <form onSubmit={handleSubmit}>
            <h4>Grocery Bud</h4>
            <div className='form-control'>
                <input type='text' className='form-input' value={newItemName} onChange={handleChange}></input>
                <button type='submit' className='btn'>Add Item</button>
            </div>
        </form>
          
  )
}

export default Form
