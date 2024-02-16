import { useEffect,useState } from 'react';
import {getTeamDetails} from '../../service/TeamService';

let TableComponent = () => {

    let [teams, setTeams] = useState([]);

    //constructor in a function.
    useEffect(()=>{
        let pobj = getTeamDetails();

        //succes-call
        pobj.then((response)=>{
           // console.log(JSON.stringify(response.data, null, 3));
            setTeams(response.data);
        });

        //failed-call
        pobj.catch((error)=>{});

        


    }, []);

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
                        {teams.map(item=>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.team}</td>
                                <td>{item.tournament}</td>
                                <td>{item.goals}</td>
                                <td>{item.shots}</td>
                                <td>{item.discipline}</td>
                                <td>{item.rating}</td>
                                <td></td>
                            </tr>    
                        )}
                </tbody>
            </table>
        </div>
    )
}

export default TableComponent;