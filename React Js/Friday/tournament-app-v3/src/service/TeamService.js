import axios from 'axios';

let getTeamDetails = () => {
    let pobj = axios.get("http://localhost:5500/teamdetails");
    return pobj;
}


let saveNewRecord = (team) => {
    let pobj = axios.post("http://localhost:5500/teamdetails", team);
    return pobj;
}

export {getTeamDetails, saveNewRecord};