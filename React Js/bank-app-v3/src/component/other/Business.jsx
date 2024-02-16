import { useState } from "react";


let BusinessComponent = (props) => {

    let [...currentaccounts] = props.data;
    let category = useState(Array.from(new Set(currentaccounts.map(item=>item.category))));

    return (
        <div className="card">
            {console.log(props)}
            <div className="card-header">
                <h5>CURRENT ACCOUNT</h5>
            </div>

            <div className="card-body">

                <div className="row">
                    <div className="col-md-8">
                        <input type="search" className="form-control" placeholder="id/company/location" />
                    </div>

                    <div className="col-md-4">
                        <select className="form-select">
                            {category.map(item =>
                                <option key={item}>{item}</option>)
                            }
                        </select>
                    </div>
                </div>

                {currentaccounts.map(item => 
                    <div className="card m-3 d-grid" style={{ "width": "201px" }}>
                        <img src="https://picsum.photos/300/200" className="card-img-top card-img" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{item.category}</h5>
                            <p className="card-text"><span className="fw-bold">Name</span> {item.accountname}</p>
                            <a href="#" className="btn btn-primary btn-sm">show details</a>
                        </div>
                    </div>
                )}


            </div>
        </div>
    )
}


export default BusinessComponent;
