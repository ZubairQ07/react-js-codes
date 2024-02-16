import "./App.css";
import FooterComponent from "./Components/Footer";
import HeaderComponent from "./Components/Header";
import TodosComponent from "./Components/Todos";
import React, { useState } from 'react';
import AddTodo from "./Components/AddTodo";

function App() {
   let onDelete = (todo)=>{
    console.log("i am srk", todo);
   

   setTodos(todos.filter((e)=>{
    return e!== todo;
   }))
   }

   const [todos, setTodos] = useState([
    {
    snow:1,
    title:"go to the market",
    desc:"you need go to dairy shop 1"
  },
  {
    snow:2,
    title:"go to the showroom",
    desc:"you need go to ghat 2"
  },
  {
    snow:3,
    title:"go to Newyork",
    desc:"you need go new shop 3"
  },
]);

 return(
  <div className='App'>
   <HeaderComponent title={"Todo-List"} searchBar={false}/>
   <AddTodo/>
   <TodosComponent todos={todos} onDelete={onDelete}/>
  <FooterComponent/>
  </div>
  );
}

export default App;

