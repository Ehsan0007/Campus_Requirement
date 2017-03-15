import ActionTypes from './actionTypes';
import * as fbConfigs from '../../configs/dbconfigs';

export function ProfileRequest(loadCompanyData) {

  return dispatch => {
        dispatch(LoadCurrent());
        var userId = localStorage.getItem("userId");
        return fbConfigs.database.ref('/student').child(userId).on('value', snap => {
            console.log(snap.val());
            const todo = [];
            snap.forEach(snap => {
            todo.push(snap.val());
            })
            dispatch(loadCurrentUserSuccess(todo))
        });
    }
}

function LoadCurrent() {
    return {
        type: ActionTypes.LoadCurrent
    };
}

function loadCurrentUserSuccess(data) {
    return {
        type: ActionTypes.loadCurrentUserSuccess,
        data
    };
}

// function loadCompsanayRequestFailed() {
//     return {
//         type: ActionTypes.loadCompanayRequestFailed
//     };
// }