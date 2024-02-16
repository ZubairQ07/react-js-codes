import React from 'react'
import { useState } from 'react'

export const ClickCounter = (props) => {
    const [count, setCount] = useState(0)

    const Incrementor = () => {
                 setCount(Count => Count + 1)
    }
    const Decrementor = () => {
        setCount(count => count - 1)

    }
  return (
    <div>
            <h3>Number : {count}</h3>
            <button onClick={Incrementor}>Increment By 1</button>
            <button onClick={Decrementor}>Decrement By 1</button>
            <button onClick={() => setCount(count+5)}>Count By 5</button>
    </div>
  )
}
