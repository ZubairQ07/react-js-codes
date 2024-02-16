import React from 'react'

export const SenderChild = (props) => {
    const message = "Welcome to The Routing Using React Bootstrap"
  return (
    <div>
        <button onClick={() => props.onSend(message)}>Show Message</button>
    </div>
  )
}
