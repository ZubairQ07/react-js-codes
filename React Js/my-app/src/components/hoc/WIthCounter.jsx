import React from 'react'
import { useState } from 'react'
    const WithCounter = (OriginalComponent) => {
    const NewComponent = (props) => {
        const [count, setCount] = useState(0)
        const increment = () => {
            setCount(count + 1);
        }
        return (
            <>
                <OriginalComponent {...props}
                                   count={count}
                                   incrementCount={increment}

                />
            </>
        )
    }
  return NewComponent;
}
export default WithCounter;