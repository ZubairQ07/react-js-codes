import React from 'react'
import { useState } from 'react'
import '../App.css'

const Reduc = (props) => {
    const [userName , setUserName] = useState('')
    const assignUser = (e) => {
        setUserName(e.target.value)
    }
  return (
    <div>
        <hr />
        <input type="text" value={userName} onChange={assignUser} />
        <hr />
        <button onClick={() => props.loginUser(userName)}>Login</button>
        <h1>Welcome : {props.name}</h1>
        <input type="checkbox" checked={props.checked} onChange={props.checkChange}/>Store Check
        <h2>Count : {props.count}</h2>
        <button onClick={props.increment}>Increment</button>
        <button onClick={props.decrement}>Decrement</button>

    </div>
  )
}


export default Reduc