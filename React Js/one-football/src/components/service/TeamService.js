import axios from 'axios';
 const TeamService = () => {

        let pobj = axios.get("http://localhost:5500/teamdetails");
            
        return pobj;

 }       
        
        const saveNewRecord = (team) => {
                let pobj = axios.post("http://localhost:5500/teamdetails",team)
          return pobj;
        }
        

export {TeamService,saveNewRecord};