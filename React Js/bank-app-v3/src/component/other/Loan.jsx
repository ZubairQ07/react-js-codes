import { useState } from "react";

let LoanComponent = () => {

    let [loanamt, setLoanAmount] = useState(0);
    let [rate, setRate] = useState(0);
    let [period, setPeriod] = useState(0);

    let readLoanAmount = (event) => {
        // console.log(event.target.value);
        setLoanAmount(event.target.value);
    }

    let readRate = (event) => {
        // console.log(event.target.value);
        setRate(event.target.value);
    }

    let readPeriod = (event) => {
        // console.log(event.target.value);
        setPeriod(event.target.value);
    }

    let calcuateInterest = () => {
        let iamt = loanamt*rate*period/100;
        alert("Interest Amount = RS." + iamt);
    }

    


    return (
        <div className="d-grid justify-content-center">
            <div className="card my-2" style={{"width":"400px"}}>
                <div className="card-header">
                    <h1>Loan Calculator</h1>
                </div>

                <div className="card-body">
                    <div className="row my-2">
                        <div className="col-md-12">
                            <input type="text" className="form-control text-center" placeholder="Loan Amount" name="txtamount" onChange={readLoanAmount}/>
                        </div>
                    </div>

                    <div className="row my-2">
                        <div className="col-md-6">
                            <input type="text" className="form-control text-center" placeholder="Rate of Interest" name="txtrate" onChange={readRate}/>
                        </div>
                        
                        <div className="col-md-6">
                            <input type="text" className="form-control text-center" placeholder="Year(s)" name="txtperiod" onChange={readPeriod} />
                        </div>
                    </div>

                    <div className="row my-2">
                        <div className="col-md-12">
                            <button className="btn btn-success m-3 float-end" onClick={calcuateInterest}>Calculate Interest</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoanComponent;