import ActionTypes from './actionTypes';
import * as fbConfigs from '../../configs/dbconfigs';

export function viewAllCompanyRequest(loadCompanyData) {
  return dispatch => {
        dispatch(LoadCompanyData());
        return fbConfigs.database.ref('/company').once('value', snap => {
            const todo = [];
            snap.forEach(childSnapshot => {
                var innerTodo = childSnapshot.val();
                innerTodo.key = childSnapshot.key;
                if(childSnapshot.hasChild('comments')){
                    var customComments = Object.keys(childSnapshot.val().comments).map(key=>{return {key:childSnapshot.val().comments[key]}})
                    console.log(customComments);
                    innerTodo.comments = customComments;
                    todo.push(innerTodo);
                }else{
                    todo.push(innerTodo);
                }
            })
            dispatch(loadCompanayRequestSuccess(todo))
        });
    }
}

function LoadCompanyData() {
    return {
        type: ActionTypes.loadCompanyDataRequest
    };
}

function loadCompanayRequestSuccess(data) {
    return {
        type: ActionTypes.loadCompanayRequestSuccess,
        data
    };
}

// function loadCompsanayRequestFailed() {
//     return {
//         type: ActionTypes.loadCompanayRequestFailed
//     };
// }