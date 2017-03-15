import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/store';
import SignUpContainer from './containers/signup';
import MainReport from './components/Root/root'
// import Admin from './components/Admin/admin'
import ViewAdmin from './containers/admin'
import CompanySignUpContainer from './containers/companysignup'
import Profile from './components/profile/profile'
import ProfileContainer from './containers/myprofile'
// import Viewjob from './components/profile/viewjob'
import ViewAllJOBS from './containers/viewjob'
import CompanyProfile from './components/companyprofile/companyprofile'
// import CompanyselfProfile from './components/companyprofile/company'
import ViewAllCompany from './containers/companycurrent'
import CompanyJobs from './components/companyprofile/companyjobs'
import AddReportContainer from  './containers/Createjobs'
import ViewAllCompanyContainer from './containers/companyProfile'
// import StudentList from './components/companyprofile/student'
import ViewAllStudentContainer from './containers/studentlist'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import {browserHistory,Router,Route,} from 'react-router';

class RootComponent extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Provider store={store}>
            <Router history={browserHistory}>

              

              <Route path="/" component={MainReport}>
                 <Route path="signup" component={SignUpContainer}></Route>
                 <Route path="companysignup" component={CompanySignUpContainer}></Route>
                 <Route path="admin" component={ViewAdmin}></Route>
              </Route>

              <Route path="profile" component={Profile}>
                  <Route path="myprofile" component={ProfileContainer}></Route>
                  <Route path="viewjob" component={ViewAllJOBS}></Route>
                  <Route path="companyprofile" component={ViewAllCompanyContainer}></Route>
              </Route>
              
              <Route path="companyprofile" component={CompanyProfile}>
                  <Route path="company" component={ViewAllCompany}></Route>
                  <Route path="companyjobs" component={CompanyJobs}></Route>
                  <Route path="Createjobs" component={AddReportContainer}></Route>
                  <Route path="studentlist" component={ViewAllStudentContainer}></Route>
              </Route>
              
              
            </Router>
          </Provider>
        </MuiThemeProvider>
      </div>
    );
  }
}

ReactDOM.render((
  <RootComponent />
),
  document.getElementById('root')
);

