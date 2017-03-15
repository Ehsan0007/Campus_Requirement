import React, { Component } from 'react';
import * as mat from 'material-ui';
import {Link} from 'react-router';

class MainReport extends Component{
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
                        <Link to="/signup"><mat.RaisedButton label="Student" primary={true} style={signup} /></Link>
                         <Link to="/companysignup"><mat.RaisedButton label="Company" primary={true} style={signup} /></Link>
                         <Link to="/admin"><mat.RaisedButton label="Admin" primary={true} style={signup} /></Link>
                </mat.AppBar>
                 
            </div>
            {this.props.children}
            </div>
        )
    }
}

export default MainReport;