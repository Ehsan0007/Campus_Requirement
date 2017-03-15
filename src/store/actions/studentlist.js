import ActionTypes from './actionTypes';
import * as fbConfigs from '../../configs/dbconfigs';

export function viewAllStudentRequest(loadCompanyData) {
  return dispatch => {
        dispatch(LoadStudentData());
        return fbConfigs.database.ref('/student').once('value', snap => {
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
            dispatch(loadStudentRequestSuccess(todo))
        });
    }
}

function LoadStudentData() {
    return {
        type: ActionTypes.LoadStudentData
    };
}

function loadStudentRequestSuccess(data) {
    return {
        type: ActionTypes.loadStudentRequestSuccess,
        data
    };
}

// function loadCompsanayRequestFailed() {
//     return {
//         type: ActionTypes.loadCompanayRequestFailed
//     };
// }