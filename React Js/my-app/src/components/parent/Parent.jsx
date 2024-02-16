import React from 'react'
import { SenderChild } from '../sender-child/Sender-child'
import Alert from 'react-bootstrap/Alert';

  const Parent = () => {
    const [msg, setMsg] = React.useState('')

  const getValue = (e) => {
      setMsg(e)
  }
  return (
    <div>
      <h3> 
        <Alert>
        Message : {msg}
        </Alert>
        </h3>
        <SenderChild onSend={ getValue }/>
    </div>
  )
}
export default Parent;
