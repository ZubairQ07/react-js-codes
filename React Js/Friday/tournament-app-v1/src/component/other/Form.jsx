import { useState } from "react";


let FormComponent = () => {

    let [teamForm, setTeamForm] = useState({});

    let readInput = (event) => {
            setTeamForm({...teamForm, [event.target.name]:event.target.value});
    }

    return (
        <div className="d-grid justify-content-center">
            <div className="card m-4">
                <div className="card-header">
                    <h1>Add New Record</h1>
                </div>

                <div className="card-body">
                    {JSON.stringify(teamForm)}
                    <div className="row my-2">
                        <div className="col-md-4">
                            <input type="text" className="form-control text-center" placeholder="Id" name="txtId" onChange={readInput} />
                        </div>

                        <div className="col-md-8">
                            <input type="text" className="form-control text-center" placeholder="Team Name" name="txtTeamName" onChange={readInput} />
                        </div>

                    </div>


                    <div className="row my-2">


                        <div className="col-md-6">
                            <input type="text" className="form-control text-center" placeholder="Tournament" name="txtTournament" onChange={readInput} />
                        </div>

                        <div className="col-md-6">
                            <input type="text" className="form-control text-center" placeholder="Goals" name="txtGoals" onChange={readInput} />
                        </div>



                    </div>

                    <div className="row my-2">
                        <div className="col-md-4">
                            <input type="text" className="form-control text-center" placeholder="Shots" name="txtShots" onChange={readInput} />
                        </div>
                        <div className="col-md-4">
                            <input type="text" className="form-control text-center" placeholder="Discipline" name="txtDiscipline" onChange={readInput} />
                        </div>

                        <div className="col-md-4">
                            <input type="text" className="form-control text-center" placeholder="Rating" name="txtRating" onChange={readInput} />
                        </div>
                    </div>
                </div>

                <div className="card-footer">
                    <button className="btn btn-success float-end col-2">Save</button>
                </div>
            </div>
        </div>

    )
}

export default FormComponent;