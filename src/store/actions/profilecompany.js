import ActionTypes from './actionTypes';
import * as fbConfigs from '../../configs/dbconfigs';

export function viewCompanyRequest(loadCompanyData) {

  return dispatch => {
        dispatch(LoadCurrentCompany());
        var userId = localStorage.getItem("companyId");
        console.log(userId)
        return fbConfigs.database.ref('/company').child(userId).on('value', snap => {
            console.log(snap.val());
            const todo = [];
            snap.forEach(snap => {
            todo.push(snap.val());
            })
            dispatch(loadCurrentCompanySuccess(todo))
        });
    }
}

function LoadCurrentCompany() {
    return {
        type: ActionTypes.LoadCurrentCompany
    };
}

function loadCurrentCompanySuccess(data) {
    return {
        type: ActionTypes.loadCurrentCompanySuccess,
        data
    };
}

// function loadCompsanayRequestFailed() {
//     return {
//         type: ActionTypes.loadCompanayRequestFailed
//     };
// }