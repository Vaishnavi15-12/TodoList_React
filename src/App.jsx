import { useState } from "react";
import Form from "./Form";
import {nanoid} from 'nanoid';
import Items from "../Items";
import { ToastContainer, toast } from 'react-toastify';


const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if(list){
    list = JSON.parse(localStorage.getItem('list'));
  }
  else{
    list=[];
  }
  return list;
}
const setLocalStorage = (items) =>{
  localStorage.setItem('list',JSON.stringify(items));
}

const App = () => {

  const [items,setItems] = useState(getLocalStorage());

  const addItem = (itemName) => {
    const newItem = {
      name:itemName,
      completed:false,
      id:nanoid()
    };
    const newItems = [...items,newItem];
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('Item added to the list');
  }
  // console.log(items);

  const removeItem = (itemId) =>{
    const newListItems = items.filter((item) =>{
      if(item.id !== itemId){
        return item;
      }
    } )
    setItems(newListItems);
    setLocalStorage(newListItems);
    toast.success('Item deleted from the list');
  }
  const editItem = (itemId) => {
    const newListItems = items.map((item) => {
      if(item.id === itemId){
        const newListItem = {...item,completed:!item.completed};
        return newListItem;
      }
      return item;
      })
      setItems(newListItems);
      setLocalStorage(newListItems);
  }

  return (
    <section className="section-center">
      <ToastContainer position="top-center"/>
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem}/>
    </section>
  )
};

export default App;
