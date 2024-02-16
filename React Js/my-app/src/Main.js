import App from './App'
import { connect } from 'react-redux'
import { asyncTask } from './components/asyncRedux/AsyncTask'
import { syncTask } from './components/asyncRedux/AsyncTask'

const mapStateToProps =(store)=>{
    return {
        count : store.num,
        name : store.username ,
        checked : store.checked
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        increment : () => dispatch(asyncTask()),
        decrement : () => dispatch(syncTask()),
        checkChange : () => dispatch({type:"CHECK_CHANGE"}),
        loginUser : (e) => dispatch({type : "LOGIN_USER" , payload : e})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)