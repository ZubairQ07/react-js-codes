import BranchComponent from "./Branch";
import BusinessComponent from "./Business"
import SavingComponent from "./Saving"
import {accounts} from '../db/bankdata';


let AccountComponent = (props) => {
    return (
        <div>
            

            <div className="row bg-info rounded">
                <div className="col-md-10">
                    <h5 className="p-3 text-dark fw-bold text-center">Our Banking Account Categories</h5>
                </div>

                <div className="col-md-2">
                    <BranchComponent data={props.data}/>
                </div>
            </div>


            <div className="row my-3">

                <div className="col-md-6">
                    <SavingComponent data={accounts.filter(item=>item.acctype=="SAVING")}/>
                </div>

                <div className="col-md-6">
                    <BusinessComponent data={accounts.filter(item=>item.acctype=="CURRENT")}/>
                </div>
            </div>
        </div>
    )
}


export default AccountComponent;