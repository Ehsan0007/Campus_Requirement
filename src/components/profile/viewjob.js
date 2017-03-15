import React, { Component } from 'react';
import './profile.css';
import * as mat from 'material-ui';
// import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
// import {Link} from 'react-router';

class Viewjob extends Component {

    
    componentDidMount() {
        this.props.loadAllCompanyRequest();
    }

    //  componentWillMount() {
    //      this.state.arr.push(this.state.application)
    //     //  console.log(this.state.arr)
    // }

    render() {
        const application =  this.props && this.props.application && this.props.application.jobs ? this.props.application.jobs : [] ;
        console.log(application)
        return (
            <div>
                <mat.Card className="card">
                    <br />
                    <h1 className="jobs">View Jobs</h1>
                    {application.map((data, index) => {
                        return (
                            <mat.List key={index}>
                                <mat.Subheader inset={true}></mat.Subheader>
                                <mat.ListItem className="listavatar"
                                    leftAvatar={<mat.Avatar src={"http://www.cablesyequipos.net/images/avatar.png"} className="pic" />}
                                    primaryText={
                                        <p>
                                            <span style={{ color: '#000' }}>Name : {data.job}</span><br /><br />
                                            <span style={{ color: '#000' }}>Description :{data.description} </span><br /><br />
                                            <span style={{ color: '#000' }}>Field : {data.field}</span><br /><br />
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

export default Viewjob;