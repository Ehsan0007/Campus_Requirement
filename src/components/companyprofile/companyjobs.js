import React, { Component } from 'react';
import './company.css';
import * as mat from 'material-ui';
// import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
    // import {browserHistory,Router,Route,IndexRoute,Link,IndexLink} from 'react-router';

class CompanyJobs extends Component{
    render(){
        return(
            <div>
               <mat.Card className="card">
                     <h1 className="jobs">Company JOb</h1>
                       return(
                            <mat.List>
                                <mat.Subheader inset={true}></mat.Subheader>
                                <mat.ListItem className="listavatar"
                                    leftAvatar={<mat.Avatar src={"http://www.cablesyequipos.net/images/avatar.png"} className="pic" />}
                                    primaryText={
                                        <p>
                                            <span style={{ color: '#000' }}>Name :</span><br /><br />
                                            <span style={{ color: '#000' }}>Email :</span><br /><br />
                                            <span style={{ color: '#000' }}>Major : </span><br /><br />
                                            <span style={{ color: '#000' }}>Experience : </span><br /><br />

                                        </p>
                                    }
                                >
                                </mat.ListItem>
                                <mat.Divider />

                            </mat.List>
                       )
                </mat.Card>
            </div>
        )
    }
}

export default CompanyJobs;