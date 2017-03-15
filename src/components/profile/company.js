import React, { Component } from 'react';
import './profile.css';
import * as mat from 'material-ui';
// import {browserHistory,Router,Route,IndexRoute,Link,IndexLink} from 'react-router';

class CompanyselfProfile extends Component {


    componentDidMount() {
        this.props.loadAllCompanyRequest();
        console.log("componentDidMount")
    }

    //   componentWillReceiveProps() {
    //     setTimeout(() => {
    //         if (!this.props.application || !this.props.application.user) {
    //             // browserHistory.push('/login');
    //         }else if(this.props.application && this.props.application.user && !this.props.application.user.isAdmin){
    //             alert("You are not Allowed to go to this page.");
    //             // browserHistory.push('/dashboard');
    //         }
    //     }, 5)
    // }


    render() {
        const application = this.props && this.props.application && this.props.application.jobs ? this.props.application.jobs : [];
        console.log("fsddfsdfdfadfdadddfddafdafdadfdfdafddfddsafsd", application)
        return (
            <div>
                <mat.Card className="card">
                    <h1 className="jobs">Company List :</h1>
                    {application.map((data, index) => {
                        return (
                            <mat.List key={index}>
                                <mat.Subheader inset={true}></mat.Subheader>
                                <mat.ListItem className="listavatar"
                                    leftAvatar={<mat.Avatar src={"http://www.cablesyequipos.net/images/avatar.png"} className="pic" />}
                                    primaryText={
                                        <p>
                                            <span style={{ color: '#000' }}>Name :{data.name}</span><br /><br />
                                            <span style={{ color: '#000' }}>Email : {data.email}</span><br /><br />
                                            <span style={{ color: '#000' }}>Major : {data.major}</span><br /><br />
                                            <span style={{ color: '#000' }}>About : {data.experience}</span><br /><br />

                                        </p>
                                    } >

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