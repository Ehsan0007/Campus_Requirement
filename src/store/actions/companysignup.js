import ActionTypes from './actionTypes';
import * as fbConfigs from '../../configs/dbconfigs';
import {browserHistory} from 'react-router'

export function CompanySignUpRequest(SignUpData) {
    return dispatch => {
        dispatch(companysignUpRequest());
        fbConfigs.fbAuth.createUserWithEmailAndPassword(
            SignUpData.email, SignUpData.password
        )
            .then((data) => {
                const userRef = fbConfigs.database.ref('/company/' + data.uid);
                userRef.set({
                    uid : data.uid,
                    name: SignUpData.name,
                    email: data.email,
                    major : SignUpData.major,
                    about: SignUpData.about
                }, signUpSuccessData => {
                    dispatch(companySignUpRequestSuccess({ uid: data.uid, name: SignUpData.name, userEmail: data.email, major: SignUpData.major,  about: SignUpData.about}));
                    localStorage.setItem("companyId",data.uid);
                    alert("Company SuccessFull SignUp")
                    browserHistory.push('companyprofile')
                    
                });
            })
            .catch((error) => {
                alert("Error Occurred Please try again.");
                dispatch(companySignUpRequestFailed(error));
            });
        // console.log("Hme firebase se ye mila" +fbConfigs.fbAuth.email)
        console.log("Hme firebase se y e mila" ,fbConfigs)
    }
}

function companysignUpRequest() {
    return {
        type: ActionTypes.CompanySignUpRequest
    };
}


function companySignUpRequestSuccess(data) {
    return {
        type: ActionTypes.CompanySignUpRequestSuccess,
        data
    };
}

function companySignUpRequestFailed() {
    return {
        type: ActionTypes.CompanySignUpRequestFailed
    };
}