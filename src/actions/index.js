import axios from 'axios';

export const FETCH_START = "FETCH_SMURF";
export const FETCH_API_SUCCESS = "FETCH_API_SUCCESS";
export const FETCH_API_FAIL = "FETCH_API_FAIL";
export const ADD_SMURF = "ADD_SMURF";
export const ERROR_MESSAGE = "ERROR_MESSAGE";


//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retrieve smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.

export const fetchSmurfs = () => {
    return dispatch => {
        //display loading while fetch starts
        dispatch(fetchStart());
        //axios call
        axios.get("http://localhost:3333/smurfs")
             .then(res => {
                console.log(res.data)
                dispatch(fetchApiSuccess(res.data))
             })
             .catch(err => dispatch(fetchApiFail(err)))
    }
}


export const fetchStart = () => {
    return({type: FETCH_START});
};
export const fetchApiSuccess = (smurfs) => {
    return({type: FETCH_API_SUCCESS, payload: smurfs});
};
export const fetchApiFail = (error) => {
    return({type: FETCH_API_FAIL, payload: error});
};
export const addSmurf = () => {
    return({type: ADD_SMURF});
};
export const errorMessage = () => {
    return({type: ERROR_MESSAGE});
};