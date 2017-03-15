import ActionTypes from '../actions/actionTypes';

const initial_state = { };
export function applicationReducer(state = initial_state, action) {
  switch (action.type) {
    case ActionTypes.LoadInitialState: {
      return state;
    }
    case ActionTypes.LoginRequestSuccess: {
      var newState1 = Object.assign({}, state, { user: action.data });
      state = newState1;
      return state;
    }
    case ActionTypes.SignUpRequestSuccess: {
      var newState2 = Object.assign({}, state, { user: action.data });
      state = newState2;
      return state;
    }

    case ActionTypes.addReportRequestSuccess: {
      var newState3 = Object.assign({}, state,{crime:action.data });
      state = newState3;
      return state;
    }
      case ActionTypes.addedReportRequestSuccess : {
    var newState4 = Object.assign({}, state);
      newState4.allCrimes = newState4.allCrimes || [];
      if(action.todos){
        newState4.allCrimes.push(action.todos);
      }
      state = newState4;
      return state;
  }

    case ActionTypes.viewAllCrimesRequestSuccess: {
      var newState5 = Object.assign({}, state, { allCrimes: action.data });
      state = newState5;
      return state;
    }
  case ActionTypes.loadCrimesRequestSuccess: {
      var newState6 = Object.assign({}, state, { allCrimes: action.data });
      state = newState6;
      return state;
    }
    
  // case ActionTypes.loadCrimesRequestSuccess: {
  //     var newState7 = Object.assign({}, state, { allCrimes: action.data });
  //     state = newState7;
  //     return state;
  //   }
  
     case ActionTypes.CompanySignUpRequestSuccess: {
      var newState8 = Object.assign({}, state, { company: action.data });
      state = newState8;
      return state;
    }

     case ActionTypes.CreatejobRequestSuccess: {
      var newState9 = Object.assign({}, state, { job: action.data });
      state = newState9;
      return state;
    }

     case ActionTypes.loadCompanayRequestSuccess: {
      var newState11 = Object.assign({}, state, { jobs: action.data });
      state = newState11;
      return state;
    }
     
     case ActionTypes.loadCurrentUserSuccess: {
      var newState12 = Object.assign({}, state, { user: action.data });
      state = newState12;
      return state;
    }
    
     case ActionTypes.loadCurrentCompanySuccess: {
      var newState13 = Object.assign({}, state, { mycompany: action.data });
      state = newState13;
      return state;
    }

     case ActionTypes.loadStudentRequestSuccess: {
      var newState14 = Object.assign({}, state, { student: action.data });
      state = newState14;
      return state;
    }

    default:
      return state;
  }
}