import axios from "axios";


        export  const asyncTask = () => {
    let url=("https://www.random.org/integers/?num=1&min=1&max=9&col=1&base=10&format=plain&rnd=new")
    return dispatch => {
        axios.get(url).then(response => {
            dispatch({type:'INCREMENT_NUMBER' , payload: response.data})
            console.log("Number form API" , response.data);
        })

    }
}
        
        
        export const syncTask = () => {
            let url=("https://www.random.org/integers/?num=1&min=1&max=9&col=1&base=10&format=plain&rnd=new")
            return dispatch =>{
                axios.get(url).then(response =>{
                    dispatch({type : 'DECREMENT_NUMBER' , payload: response.data})
                    console.log("Number form API", response.data);
                })
            }
        }
       
    

