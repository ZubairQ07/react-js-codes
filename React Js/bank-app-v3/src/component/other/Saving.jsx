

let SavingComponent = (props) => {

    let [...savingaccounts] = props.data
    return (
        <div className="card">
            {console.log(props)}
            <div className="card-header">
                <h5>SAVING ACCOUNTS</h5>
            </div>

            <div className="card-body">

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Account No</th>
                            <th>Account Name</th>
                            <th>Opening Date</th>
                            <th>Balance</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {savingaccounts.map(item=>
                            <tr>
                                <td>{item.accountno}</td>
                                <td>{item.accountname}</td>
                                <td>{item.openingdate}</td>
                                <td>{item.balance}</td>
                                <td>
                                    <button className="btn btn-danger btn-sm">Remove</button>
                                </td>
                            </tr>
                            
                        )}

                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default SavingComponent;