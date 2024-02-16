import {useState} from 'react'

export const StateFun1 = () => {
    const [name, setName] = useState({firstName : "" , lastName : "" })
;

  return (
    <div>
        <h3>{ JSON.stringify(name) }</h3>
        <input 
        type="text" 
        placeholder='Enter FirstName' 
        value={name.firstName} 
        onChange={(e) => setName({...name, firstName: e.target.value})} />
        <br />
        <input 
        type="text" 
        placeholder='Enter your lastName' 
        value={name.lastName} 
        onChange={(e)=> setName({...name, lastName: e.target.value })} />

        
    </div>
  )
}
