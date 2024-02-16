import React from 'react'
import WithCounter from '../hoc/WIthCounter';

    const HoverCounter = (props) => {
  return (
    <div>
        <h2 onMouseOver={props.incrementCount}> Counter : {props.count}</h2>
        <h5 >Created By : {props.createdBy}</h5>
    </div>
  )
}
export default WithCounter(HoverCounter);