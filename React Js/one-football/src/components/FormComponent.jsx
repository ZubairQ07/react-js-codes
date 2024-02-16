

import React, {useState} from 'react'

 const FormComponent = () => {

    let [teamForm,setTeamForm]=useState({});

    let readInput=(event)=>{
        setTeamForm({...teamForm, [event.target.name]:event.target.value});
    }

  return (
    <div className='d-grid justify-content-center'>
        <div className="card m-4 ">
            <div className="card-header">
                <h2>Add New Component</h2>
            </div>
            <div className="card-body">
                {JSON.stringify(teamForm)}
            <div className="row my-2">
            <div className="col-md-5">
                <input type="text" className='form-control text-center' placeholder='Id' name='txt-Id' onChange={readInput}/>
            </div>
            <div className="col-md-7">
                <input type="text" className='form-control text-center' placeholder='Team' name='txt-Team' onChange={readInput}/>
            </div>
            
            </div>
        </div>
        
        <div className="row my-1 mx-2">
        <div className="col-md-6">
                <input type="text" className='form-control text-center' placeholder='Tournament' name='txt-Tournament' onChange={readInput}/>
            </div>
            <div className="col-md-3">
                <input type="text" className='form-control text-center' placeholder='Goals' name='txt-Goals' onChange={readInput}/>
        </div>
            <div className="col-md-3">
                <input type="text" className='form-control text-center' placeholder='Shots' name='txt-Shots' onChange={readInput}/>
        </div>
            
        </div>
        <div className="row my-4 mx-2">
        <div className="col-md-4">
                <input type="text" className='form-control text-center' placeholder='Discipline' name='txt-Discipline' onChange={readInput}/>
        </div>
        <div className="col-md-4">
                <input type="text" className='form-control text-center' placeholder='Rating' name='txt-Rating' onChange={readInput}/>
        </div>
        <div className='col-md-4'>
            <button className='btn btn-outline-primary px-5'>Save</button>
        </div>
        </div>
        </div>
    </div>
  )
}
export default FormComponent;