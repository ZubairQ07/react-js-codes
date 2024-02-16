import React from 'react'
import TodoItemComponent from './Todo';

const TodosComponent = (props) => {
  return (
    <div className='container'>
      <h3 className='text-center my-3'>Todos List</h3> 
      {props.todos.length===0?"No todos to display":
      props.todos.map((todo,pos)=> {
        return  <TodoItemComponent todo={todo} key={pos} onDelete={props.onDelete}/>
      })}
          </div>
  ) 
}
export default TodosComponent;