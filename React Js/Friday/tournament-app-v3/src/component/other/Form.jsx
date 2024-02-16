import { useEffect, useState } from "react";
import {saveNewRecord} from '../../service/TeamService';


let FormComponent = () => {



    let [teamForm, setTeamForm] = useState({});
    let [saveStatus, setSaveStatus] = useState({status:false, msg:""})

    let save = () =>{

        let tobj = {"id":teamForm.txtId, "team":teamForm.txtTeamName, "tournament":teamForm.txtTournament, "goals":teamForm.txtGoals,"shots":teamForm.txtShots, "discipline":teamForm.txtDiscipline,"rating":teamForm.txtRating};
        console.log(tobj);
        let pobj = saveNewRecord(tobj);

        pobj.then((response)=>{
            if(response.status==200)
            {
                setSaveStatus({status:true, msg:"Save Successfull"});
            }
        });

        pobj.catch((error)=>{
            console.log(JSON.stringify(error,null, 3));
        });
    };    

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
                    {saveStatus.status==true?
                    <div className="alert alert-success">
                        <span className="fw-bold">{saveStatus.msg}</span>
                    </div>:false}

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
                    <button className="btn btn-success float-end col-2" onClick={save}>Save</button>
                </div>
            </div>
        </div>

    )
}

export default FormComponent;