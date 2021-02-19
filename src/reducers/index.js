import { FETCH_START, FETCH_API_SUCCESS, FETCH_API_FAIL, ADD_SMURF, ERROR_MESSAGE } from '../actions';


export const initialState = {
    smurfs:[],
    isLoading: false,
    error: "",
}

const reducer = (state = initialState, action)=>{
    console.log("action payload: ", action.payload, ", action type: ", action.type)
    console.log("State: ", state)
    switch(action.type){
        case(FETCH_START):
            return ({
                ...state,
                isLoading: true,
            });
        case(FETCH_API_SUCCESS):
            return ({
                ...state,
                smurfs: action.payload,
                isLoading: false,
            });
        case(FETCH_API_FAIL):
            return state;
        case(ADD_SMURF):
            return state;
        case(ERROR_MESSAGE):
            return state;
        default:
            return state;
    }
}

export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accommodate the start of a smurf fetch.
//4. Add in a reducer case to accommodate the successful smurf api fetch.
//5. Add in a reducer cases to accommodate the failed smurf api fetch.
//6. Add in a reducer case to accommodate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.