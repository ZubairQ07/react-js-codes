let ReferenceFormComponent = () => {
    return (
      <div>
        <div className="row">
          <div className="col-md-6">         
            <h3 style={{ "backgroundColor": "#DAF7A6", "color": "blue" }} className="p-2">Employee Reference Form</h3>        
            <div className="row">
              <div className="col-md-4">
                <input type="text" className="form-control" placeholder="First Name" />
              </div>
  
              <div className="col-md-4">
                <input type="text" className="form-control" placeholder="Middle Name" />
              </div>
  
              <div className="col-md-4">
                <input type="text" className="form-control" placeholder="Last Name" />
              </div>
            </div>
  
  
            <div className="row mt-3">
              <div className="col-md-6">
                <select className="form-select">
                  <option>Mumbai</option>
                  <option>Kolkata</option>
                  <option>Bangalore</option>
                  <option>Chennai</option>
                  <option>Pune</option>
                </select>
              </div>
  
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Contact no" />
              </div>
            </div>
          </div>
  
          <div className="col-md-6">
            <div>
              <input type="radio" className="form-check-input" id="rmale" name="gender" />
              <label for="rmale" className="mx-2">Male</label>
  
              <input type="radio" className="form-check-input" id="rfemale" name="gender" />
              <label for="rfemale" className="mx-2">Female</label>
            </div>
  
            <div className="mt-4">
              <input type="radio" className="form-check-input" id="r1" name="status" />
              <label for="r1" className="mx-2">Single</label>
  
              <input type="radio" className="form-check-input" id="r2" name="status" />
              <label for="r2" className="mx-2">Married</label>
            </div>
  
            <div className="mt-3">
              <input type="text" className="form-control" placeholder="email" />
          </div>
          </div>
             <div>
          <button className="btn btn-success mx-2 my-2 float-end col-md-2">Submit Form</button>
          </div>
          </div>
  
        </div>
      
    )
  }
export default ReferenceFormComponent; 