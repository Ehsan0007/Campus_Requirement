import React, { Component } from 'react';
import './company.css';
import * as mat from 'material-ui';
// import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
// import {browserHistory,Router,Route,IndexRoute,Link,IndexLink} from 'react-router';

class StudentList extends Component{

    componentWillMount(){
        this.props.laodAllStudentList()
    }
    
    render(){
        const application =  this.props && this.props.application && this.props.application.student ? this.props.application.student : [] ;
        console.log(application)  
        return(
            <div>
                 <mat.Card className="card">
                       <h1 className="jobs">Student List</h1>
                       {application.map((data,index)=>{
                         return(
                            <mat.List>
                                <mat.Subheader inset={true}></mat.Subheader>
                                <mat.ListItem className="listavatar"
                                    leftAvatar={<mat.Avatar src={"http://www.cablesyequipos.net/images/avatar.png"} className="pic" />}
                                    primaryText={
                                        <p>
                                            <span style={{ color: '#000' }}>Name : {data.name}</span><br /><br />
                                            <span style={{ color: '#000' }}>Email : {data.email}</span><br /><br />
                                            <span style={{ color: '#000' }}>Major : {data.major}</span><br /><br />
                                            <span style={{ color: '#000' }}>Experience : {data.experience}</span><br /><br />

                                        </p>
                                    }
                                >
                                </mat.ListItem>
                                <mat.Divider />

                            </mat.List>
                       )
                       })}
                      
                </mat.Card>
            </div>
        )
    }
}

export default StudentList;