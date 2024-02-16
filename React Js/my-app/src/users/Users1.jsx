import React from 'react'
import axios from 'axios'
import {useState , useEffect} from 'react'
import {Link} from 'react-router-dom'

 function Users1() {
  const [data,setUsers] = useState({users: [] , loading : true});
    let url=("https://jsonplaceholder.typicode.com/users")
    const displayUser = () => {
      axios.get(url).then(response => {
        setUsers({users: response.data , loading: false});
     }
     ).catch(err => console.log("error",err))
     
    }
    useEffect (() => {
        displayUser();
    },[])
  
  return (
    <div>
      {
        data.loading ? <h1>Loading data ....</h1> :
     
      
       <ul>
          {
            data.users.map(user =>
            <li key={user.id}>
             <Link to={ '/users/' + user.id }> {user.name}</Link>
              </li>)

          }
       </ul>
 }
    </div>
  )
}
export default Users1;
