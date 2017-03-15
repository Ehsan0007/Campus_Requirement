import React, { Component } from 'react';
import * as mat from 'material-ui';
import {Link} from 'react-router';
import {connect} from 'react-redux'
import {logOutRequest} from '../../store/actions/logout'

class CompanyProfile extends Component{

    constructor(){
        super();
        this.logout = this.logout.bind(this)
    }

    logout(){
         this.props.logoutRequest();
    }

    render(){
          const signup = {
           float:'right',
           height : 40,
           marginTop : 20,
           color : 'white',
           backgroundColor : 'transparent',
           margin : '10px',
           fontWeight : 'bold',
        }
        return(
            <div>
                <div>
                   <mat.AppBar
                        className="appbar"
                        title="Campus Recruitment System "
                        iconClassNameRight="muidocs-icon-navigation-expand-more">
                        <Link to="/companyprofile/company"><mat.RaisedButton label="Profile" primary={true} style={signup} /></Link>
                         <Link to="/companyprofile/companyjobs"><mat.RaisedButton label="Your Jobs" primary={true} style={signup} /></Link>
                         <Link to="/companyprofile/Createjobs"><mat.RaisedButton label="CreateJobs" primary={true} style={signup} /></Link>
                         <Link to="/companyprofile/studentlist"><mat.RaisedButton label="Student" primary={true} style={signup} /></Link>
                         <Link to=""><mat.RaisedButton label="Logout" primary={true} style={signup} onClick={this.logout}/></Link>
                </mat.AppBar>
                 
            </div>
            {this.props.children}
            </div>
        )
    }
}
function mapStateToProps(state) {
    //here we are mapping the redux state to props so we can use it in our components
    return {
        application: state.application
    };
}
function mapDispatchToProps(dispatch) {
    //Those will be the actions we will be Triggerening from Components
    return {

        logoutRequest: () => dispatch(logOutRequest()),
       
    };
}
const rootMainContainer = connect(mapStateToProps, mapDispatchToProps)(CompanyProfile);

export default rootMainContainer;

