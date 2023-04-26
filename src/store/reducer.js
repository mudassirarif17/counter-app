const initState = {
    counter: 0,
    price : 0,
}

const rootReducer =(state=initState ,action) =>{
    // return state;
    let newState;
    switch(action.type){
        case"INC":
        newState={
            ...state,
            counter : state.counter + action.data,
        }
        break;
        case"DEC":
        newState={
            ...state,
            counter : state.counter - action.data,
        }
        break;
        default:
            newState = state;
        break;
    }
    if(newState.counter<0){
        newState.counter=0;
    }
    return newState;
}
 export default rootReducer;