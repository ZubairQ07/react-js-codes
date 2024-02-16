import React from 'react'
import './contact.css'
 const Contact = (props) => {
  const [contacted , setContacted] = React.useState(props.contacted);

  let title = props.gender === 'M' ? "Mr" : "Ms"
  let classes= props.gender === 'M'? "cardHeading male " : "cardHeading female "
  let classes1=props.contacted ? "contactor": "";


  return (
    <div className={classes + classes1}>
      <div>
        <h2>{title} {props.name}</h2>
        <hr/>
        { props.phone ? <h5>Phone : {props.phone}</h5> : '' }

        { props.email ? <h5>Email :  {props.email}</h5> : <h5>Email : <em>Not Available</em></h5>}
        </div>
        <div>
          <hr/>
          <input
          type="checkbox"
          value="12"
          checked={ contacted }
          onChange={() => setContacted(!contacted)}
           /><label htmlFor="contacted">Contacted</label>
</div>
    </div>
  )
}
export default Contact;
