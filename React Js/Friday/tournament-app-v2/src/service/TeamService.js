import axios from 'axios';

let getTeamDetails = () => {
    let pobj = axios.get("http://localhost:5500/teamdetails");
    return pobj;
}


export {getTeamDetails};