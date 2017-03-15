import ActionTypes from './actionTypes';
import * as fbConfigs from '../../configs/dbconfigs';

export function LoadAdminRequest(adminData) {
    return dispatch => {
        dispatch(CreateAdminRequest());
         return fbConfigs.database.ref('/jobs').push(adminData)
         .then((data)=>{
            alert("Successfully Added.");
            dispatch(CreateAdminRequestSuccess(data));
            console.log(data)
        }).catch((data)=>{
            alert("Something error");
            dispatch(CreateAdminRequestFailed(data))
        })

        
    }

}

function CreateAdminRequest() {
    return {
        type: ActionTypes.CreateAdminRequest
    };
}

function CreateAdminRequestSuccess(data) {
    return {
        type: ActionTypes.CreateAdminRequestSuccess,
        data
    };
}

function CreateAdminRequestFailed() {
    return {
        type: ActionTypes.CreateAdminRequestFailed
    };
}