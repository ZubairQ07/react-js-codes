import React from 'react'
import { useState } from 'react'
import './Crud.css';

export const Crud = () => {
    const[name,setName]=useState('')
    const[allData,setAllData]=useState([])

    const addHandler=()=>{
        if(name.length!==0)
        setAllData(newData=>[...newData,name])
        setName('')
        
    }
    const deleteInput=()=>{

    }

  return (
    <div>
        <div>
        <h3>Assignment</h3>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        <button onClick={addHandler}>Add</button>
        {
            allData.map((val,index)=>
            <div>
                <h1>{val}</h1>
                <button>Edit</button>
            <button>Delete</button>
            </div>
            )
        }
        </div>
        <div>
            <h2>{name}</h2>
           
        </div>
    </div>
  )
}
