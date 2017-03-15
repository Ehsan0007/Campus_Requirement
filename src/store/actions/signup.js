import ActionTypes from './actionTypes';
import * as fbConfigs from '../../configs/dbconfigs';
import {browserHistory} from 'react-router'


export function SignUpRequest(SignUpData) {
    return dispatch => {
        dispatch(signUpRequest());
        fbConfigs.fbAuth.createUserWithEmailAndPassword(
            SignUpData.email, SignUpData.password
        )
            .then((data) => {
                const userRef = fbConfigs.database.ref('/student/' + data.uid);
                userRef.set({
                    uid : data.uid,
                    name: SignUpData.name,
                    email: data.email,
                    major : SignUpData.major,
                    experience: SignUpData.experience
                }, signUpSuccessData => {
                    dispatch(SignUpRequestSuccess({ uid: data.uid, userEmail: data.email, name: SignUpData.name, gender: SignUpData.major,  experience: SignUpData.experience }));
                    console.log("Data uid in user", data.uid);    
                    localStorage.setItem("userId",data.uid);
                    alert("SuccessFull SignUp")
                    browserHistory.push('/profile')
                });
            })
            .catch((error) => {
                alert("Error Occurred Please try again.");
                dispatch(SignUpRequestFailed(error));
            });
        // console.log("Hme firebase se ye mila" +fbConfigs.fbAuth.email)
        console.log("Hme firebase se y e mila" ,fbConfigs)
    }
}

function signUpRequest() {
    return {
        type: ActionTypes.SignUpRequest
    };
}

function SignUpRequestSuccess(data) {
    return {
        type: ActionTypes.SignUpRequestSuccess,
        data
    };
}

function SignUpRequestFailed() {
    return {
        type: ActionTypes.SignUpRequestFailed
    };
}