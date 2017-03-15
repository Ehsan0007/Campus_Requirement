import React, { Component } from 'react';
import './admin.css';
import * as mat from 'material-ui';
import {browserHistory} from 'react-router';

class Admin extends Component {
   
    constructor(props) {
        super(props);
       
        this.state = {email: '', password: ''};
        this.handleSubmit = this.handleLoginSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }


    componentDidMount() {
        // this.props.loadInitialState();
    }

    // componentWillReceiveProps() {
    //     setTimeout(() => {
    //         if (this.props.application && this.props.application.user) {
    //             browserHistory.push('/dashboard');
    //         }
    //     }, 5)
    // }

    handleLoginSubmit(evt) {
        evt.preventDefault();
        var email = this.refs.email.getValue();
        var password = this.refs.password.getValue();
        if(email==="abc@gmail.com" && password === "123456"){
            //  var userObj = {email: email, password: password};
            //    this.props.adminRequest(userObj);
            browserHistory.push('/profile/viewjob')
        }
        else{
            alert("Email && Password is NOt valid");
        }
       
      
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
      
        return (
            <div className="main-login-div">
               
                <mat.Card className="signmain">
                    <mat.CardTitle title="Admin Login" className="text"/>
                    <mat.CardText>
                        {/*<p>Already Have account? <Link to="/login">Login</Link></p>*/}
                        <form onSubmit={this.handleSubmit} onChange={this.clearErrors}>
                            <h3>Account Info</h3>
                            <mat.Divider />
                           
                            <mat.TextField
                                hintText="test@test.com"
                                floatingLabelText="Email"
                                className="full-width-container"
                                ref="email"
                                name="email"
                                required={true}
                                type="email"
                                onChange={this.handleInputChange}
                                /><br />
                            <mat.TextField
                                hintText="password"
                                ref="password"
                                name="password"
                                required={true}
                                type="password"
                                className="full-width-container"
                                onChange={this.handleInputChange}
                                floatingLabelText="Password" />
                            <br />
                            <br />
                          
                            <mat.RaisedButton type="submit" label="Submit" primary={true} />
                        </form>
                    </mat.CardText>
                </mat.Card>
            </div>
        );
    }
}

export default Admin;