

let BranchComponent = (props) => {

    let [...branches] = props.data;
    return (
        <div>
            {console.log(props)}
            <select className="form-select my-2">
                {branches.map(item=>
                    <option key={item.branchcode}>{item.branch}</option>    
                )}
            </select>
        </div>
    )
}

export default BranchComponent;