import './Card.css'

import React from 'react'

export const Card = (props) => {
    const classic = 'card ' + props.className;
  return (
    <div className={classic}>{props.children}</div>
  )
}
