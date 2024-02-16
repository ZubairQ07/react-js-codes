import store from './Store'

 const Reducer = (initialStore=store, action) => {
    let newStore = initialStore;
    if(action.type === 'INCREMENT_NUMBER'){
        newStore.num += action.payload;
    }
    else if(action.type === 'DECREMENT_NUMBER') {
        newStore.num -= action.payload;
    }
    else if(action.type === 'LOGIN_USER'){
        newStore.username = action.payload;
    }
    else if(action.type === "CHECK_CHANGE"){
        newStore.checked = !newStore.checked;
    }
    console.log(newStore)
    return {...newStore};

}
export default Reducer;