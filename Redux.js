// step # 1
const redux = require('redux');
// step # 2
const createStore = redux.createStore;

// Step # 6
const initState={
    counter : 0,
};

// step # 4 
const rootReducer = (state = initState , action) => {
    // return state;
    // if(action.type === "INC_COUNTER"){
    //     return{
    //         ...state,
    //         counter : state.counter + action.value,
    //     }
    // }
    // if(action.type === "DEC_COUNTER"){
    //     return{
    //         ...state,
    //         counter : state.counter - action.value,
    //     }
    // }
    // else{
    //     return state;
    // }
    let newState;
    switch(action.type){
        case "INC_COUNTER":
            newState={
                ...state,
                counter: state.counter + action.value,
            };
            break;
        case "DEC_COUNTER":
            newState={
                ...state,
                counter: state.counter - action.value,
            };
            break;
        default:
            newState = state;
            break;    
    }
    return newState;
};

// step # 3
const store = createStore(rootReducer);

// step # 8
store.subscribe(()=>{
    console.log(store.getState());
});


// Step # 7
store.dispatch({
    type : "INC_COUNTER",
    value : 5,
});
store.dispatch({
    type : "DEC_COUNTER",
    value : 1,
});

// step # 5
// console.log("Store",store.getState());