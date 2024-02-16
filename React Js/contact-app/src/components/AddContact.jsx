import React from 'react'

  const AddContact = () => {
  return (
    <div>
      <h2>Add Contact</h2>
      <form>
        <div className='container-fluid'>
          <label className='form-group'>Name</label>
          <input className='form-control my-1' type="text" name='name' placeholder='Enter Your Name' />
        </div>
        <div className='container-fluid'>
          <label className='form-group'>Email</label>
          <input className='form-control my-1' type="text" name='email' placeholder='Enter Your EMail' />
        </div>
        <button className="btn btn-outline-primary my-3">Add Contact</button>
      </form>
    </div>
  )
}
export default AddContact;