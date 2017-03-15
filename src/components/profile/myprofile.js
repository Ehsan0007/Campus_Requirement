import React, { Component } from 'react';
import './profile.css';
import * as mat from 'material-ui';
// import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
// import { browserHistory, Router, Route, IndexRoute, Link, IndexLink } from 'react-router';

class Myprofile extends Component {

    constructor(props) {
        super(props)
        this.state = { arr: [] }
       
        // console.log("sdfdsfsfssdfsdfdsfsdfd000000000000", this.state.arr)
    }
    componentDidMount() {
        this.props.profileRequest();
        console.log("componentDidMount")

    }

    componentWillMount() {
         this.state.arr.push(this.props.application.user)
        // this.setState({ arr: this.props.application.user })
        // console.log("newnewnewnewnwenwwnwnwnwenwenwwwnwnwnwenwen",this.state.arr)

    }
    render() {
        // console.log("componentDidMount---------------------", this.state.arr)
        // const application = this.props && this.props.application && this.props.application.user ? this.props.application.user : [];
        // // console.log(application);

        return (
            <div>
                <mat.Card className="card">
                    {this.state.arr.map((user, index) => {
                        return (
                            <mat.List key={index}>
                                <mat.Subheader inset={true}></mat.Subheader>
                                <mat.ListItem className="listavatar"
                                    leftAvatar={<mat.Avatar src={"http://www.cablesyequipos.net/images/avatar.png"} className="pic" />}
                                    primaryText={
                                        <p>
                                            <span style={{ color: '#000' }}>Name : {user.name}</span><br /><br />
                                            <span style={{ color: '#000' }}>Email : {user.userEmail}</span><br /><br />
                                            <span style={{ color: '#000' }}>Major : {user.gender}</span><br /><br />
                                            <span style={{ color: '#000' }}>Experience : {user.experience}</span><br /><br />

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

export default Myprofile;