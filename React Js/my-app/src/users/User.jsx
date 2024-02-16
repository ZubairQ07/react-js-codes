import React from 'react'
import axios from 'axios'
import './User.css'
import { useEffect , useState } from 'react';
import { useParams } from 'react-router-dom';
 function User() {
    const [data, setUserData] = useState({user : [] , loading : true});

    let uri = ("https://jsonplaceholder.typicode.com/users/")
    const showUser = ( ) => {
        axios.get( uri + id).then(response => {
            setUserData({user : response.data , loading : false})
        })
    }

    const { id } = useParams();
    useEffect(()=>{
      showUser(id)
    },[])
  return (
    <>
       {
        data.loading ? <h3> DATA LOADING .....</h3> :
        <div>
          <h3>{data.user.name}</h3>
          <hr />
          <h4>Username : {data.user.username}</h4>
          <h4>Email : {data.user.email}</h4>
          <h4>City: {data.user.address.city}</h4>
          <h4>Street : {data.user.address.street}</h4>
          <h4>phone: {data.user.phone}</h4>
        </div>
       }
    </>
  )
}
export default User;
