import ActionTypes from './actionTypes';
import * as fbConfigs from '../../configs/dbconfigs';

export function createjobRequest(createjob) {
    return dispatch => {
        dispatch(CreatejobRequest());
         return fbConfigs.database.ref('/jobs').push(createjob)
         .then((data)=>{
            alert("Successfully Added.");
            dispatch(CreatejobRequestSuccess(data));
            console.log(data)
        }).catch((data)=>{
            alert("Something error");
            dispatch(CreatejobRequestFailed(data))
        })

        
    }

}

function CreatejobRequest() {
    return {
        type: ActionTypes.CreatejobRequest
    };
}

function CreatejobRequestSuccess(data) {
    return {
        type: ActionTypes.CreatejobRequestSuccess,
        data
    };
}

function CreatejobRequestFailed() {
    return {
        type: ActionTypes.CreatejobRequestFailed
    };
}