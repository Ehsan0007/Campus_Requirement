import React, { Component } from 'react';
import './company.css';
import * as mat from 'material-ui';
// import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {} from 'react-router';

class CompanyselfProfile extends Component{

     constructor(props) {
        super(props)
        this.state = { arr: [] }
    }

    componentDidMount(){
        this.props.companyprofileRequest()
    }

    componentWillMount(){
        this.state.arr.push(this.props.application.company)
        //  console.log("jfgsdgsdgdgldlgsd",this.state.arr)
        console.log("Ehsan",this.state.arr)
    }

    render(){
        //  const application = this.props && this.props.application && this.props.application.company ? this.props.application.company : [];
        return(
            <div>
                <mat.Card className="card">
                     <h1 className="jobs">Company Profile</h1>
                   {this.state.arr.map((data,index)=>{
                       return(
                            <mat.List key={index}>
                                <mat.Subheader inset={true}></mat.Subheader>
                                <mat.ListItem className="listavatar"
                                    leftAvatar={<mat.Avatar src={"http://www.cablesyequipos.net/images/avatar.png"} className="pic" />}
                                    primaryText={
                                        <p>
                                            <span style={{ color: '#000' }}>Name : {data.name}</span><br /><br />
                                            <span style={{ color: '#000' }}>Email : {data.userEmail}</span><br /><br />
                                            <span style={{ color: '#000' }}>Major : {data.major}</span><br /><br />
                                            <span style={{ color: '#000' }}>Experience : {data.about}</span><br /><br />

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

export default CompanyselfProfile;