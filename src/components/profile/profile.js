import React, { Component } from 'react';
import * as mat from 'material-ui';
import {Link} from 'react-router';
import {logOutRequest} from '../../store/actions/logout'
import { connect } from 'react-redux';

class Profile extends Component{
    constructor(){
        super();
        this.logout = this.logout.bind(this)
    }

    logout(){
        this.props.logoutRequest();
        console.log(this.props)
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
                        <Link to="/profile/myprofile"><mat.RaisedButton label="Profile" primary={true} style={signup} /></Link>
                         <Link to="/profile/viewjob"><mat.RaisedButton label="View Jobs" primary={true} style={signup} /></Link>
                         <Link to="/profile/companyprofile"><mat.RaisedButton label="Company" primary={true} style={signup} /></Link>
                         <Link to=""><mat.RaisedButton label="Logout" primary={true} style={signup} onClick={this.logout} /></Link>
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
const rootMainContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default rootMainContainer;

