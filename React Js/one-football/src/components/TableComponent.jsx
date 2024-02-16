import React, { useEffect ,useState} from 'react'
import { TeamService } from './service/TeamService';
const TableComponent = () => {

    let [teams,setTeams]=useState([]);

        useEffect(()=>{
            let pobj = TeamService();

            pobj.then((response)=>{
                setTeams(response.data);
                // console.log(JSON.stringify(response,null,3));
            });

            

            pobj.catch((error)=>{})


            
        },[]);

  return (
    <div>
        <div className='row my-2'>
            <div className="col-md-6">
                <input type="search" className='form-control' placeholder='Team/Id' name='txt-Search' />
            </div>
            <div className="col-md-3">
                <select name="ddTournaments" className='form-select'>
                    <option>Select</option>
                    <option>Premier League</option>
                    <option>Ligue 1</option>
                    <option>Serie A</option>
                    <option>LaLiga</option>
                    <option>Bundesliga</option>
                </select>
            </div>
            <div className='col-md-3'>
                <button className="btn btn-outline-primary">clear</button>
            </div>
        </div>
        <table className='table table-hover'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Team</th>
                    <th>Tournament</th>
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
                            <td><button className='btn btn-outline-danger'>Delete</button></td>
                        </tr>
                        )}
            </tbody>
        </table>
    </div>
  )
}
export default TableComponent;