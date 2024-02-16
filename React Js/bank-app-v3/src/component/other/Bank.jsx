import AccountComponent from "./Account"

import {branches} from '../db/bankdata';
import LoanComponent from "./Loan";


let BankComponent = () => {
    return (
        <div className="mt-4">
            <div className="row">
                <div className="col-md-11">
                    <AccountComponent data={branches}/>
                </div>

                <div className="col-md-1 bg-light">
                        <ul className="list-group">
                            <li className="list-group-item list-group-item-action my-3 text-center">
                                <i class="fa-solid fa-coins"></i>
                            </li>
                            <li className="list-group-item list-group-item-action my-3 text-center">
                                <i class="fa-solid fa-money-bill-trend-up"></i>
                            </li>
                            <li className="list-group-item list-group-item-action my-3 text-center">
                                <i class="fa-solid fa-landmark"></i>
                            </li>
                            <li className="list-group-item list-group-item-action my-3 text-center">
                                <i class="fa-solid fa-filter-circle-dollar"></i>
                            </li>
                            <li className="list-group-item list-group-item-action my-3 text-center">
                                <i class="fa-solid fa-sack-xmark"></i>
                            </li>
                        </ul>
                </div>
            </div>

            <LoanComponent />
        </div>
    )
}

export default BankComponent;