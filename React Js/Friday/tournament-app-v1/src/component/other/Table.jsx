

let TableComponent = () => {
    return (
        <div>
            <div className="row my-2">
                <div className="col-md-6">
                    <input type="search" placeholder="id/team" className="form-control" name="txtSearchItem" />
                </div>

                <div className="col-md-3">
                    <select name="ddTournaments" className="form-select">
                        <option>Select</option>
                    </select>
                </div>

                <div className="col-md-3">
                    <button className="btn btn-secondary">Clear</button>
                </div>
            </div>
            <table className="table table-hover my-2">
                <thead>
                        <tr>
                            <th>Id</th>
                            <th>Team</th>
                            <th>Tournaments</th>
                            <th>Goals</th>
                            <th>Shots</th>
                            <th>Discipline</th>
                            <th>Rating</th>
                            <th>Action</th>
                        </tr>
                </thead>

                <tbody>

                </tbody>
            </table>
        </div>
    )
}

export default TableComponent;