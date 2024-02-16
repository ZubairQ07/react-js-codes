import React, { useState } from 'react';

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit=(e)=> {
    e.preventdefault();
    if(!title || !desc){
      alert("title or description cannot be empty");
    }
  }
  return (
    <div className='container my-3'>
      <h3 className='text-center'>Add a Todo-Task</h3>
      <form onSubmit={submit}>
        <div className='form-group'>
          <label htmlFor='title'>Todo Title</label>
          <input type='text' value={title} onChange={(e)=>{setTitle(e.target.value)}} className='form-control' id='title' aria-describedby='title' placeholder='Enter Todo Task'/>
          </div>
        <div className='form-group'>
          <label htmlFor='desc'>Description</label>
          <input type='text' value={desc} onChange={(e)=>{setDesc(e.target.value)}} className='form-control' id='desc' placeholder='Enter Description'/>
        </div>
        <button type='Submit' className='btn btn-xs btn-success p-1 my-3 '>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
