import React, { Component } from 'react';
import './companysignup.css';
import * as mat from 'material-ui';
// import {browserHistory,Router,Route,IndexRoute,Link, IndexLink} from 'react-router';

class CompanaySignup extends Component{
     constructor(props) {
        super(props);
       
        this.state = {name: '', email: '', password: '',major: '',about:'' };
        this.handleSubmit = this.handleLoginSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

     componentDidMount() {
        this.props.loadInitialState();
    }

      handleLoginSubmit(evt) {
        evt.preventDefault();
        var name = this.refs.name.getValue();
        var email = this.refs.email.getValue();
        var password = this.refs.password.getValue();
        var major = this.refs.major.getValue();
        var about  = this.refs.about.getValue();
        
        var userObj = { name: name , email: email, password: password,major: major,about:about };
        this.props.companysignUpRequest(userObj);
    }

     handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }


    render(){
        return(
            <div className="main-login-div">
               
                <mat.Card className="signmain">
                    <mat.CardTitle title="Company SignUp" className="text"/>
                    <mat.CardText>
                        {/*<p>Already Have account? <Link to="/login">Login</Link></p>*/}
                        <form onSubmit={this.handleSubmit} onChange={this.clearErrors}>
                            <h3>Account Info</h3>
                            <mat.Divider />
                              <mat.TextField
                                hintText="John Doe"
                                floatingLabelText="Enter Name"
                                className="full-width-container"
                                ref="name"
                                name="name"
                                required={true}
                                type="text"
                                onChange={this.handleInputChange}
                                /><br />

                            <mat.TextField
                                hintText="test@test.com"
                                floatingLabelText="Enter Email"
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
                          
                            <mat.TextField
                                hintText="Enter Skills"
                                floatingLabelText="Enter Major Field"
                                className="full-width-container"
                                ref="major"
                                name="major"
                                required={true}
                                type="text"
                                onChange={this.handleInputChange}
                                /><br />
                           
                            <mat.TextField
                                hintText="About Your Self"
                                floatingLabelText="About Your Self"
                                className="full-width-container"
                                ref="about"
                                name="About"
                                required={true}
                                type="text"
                                onChange={this.handleInputChange}
                                /><br />
                        
                            <br />
                          
                            <mat.RaisedButton type="submit" label="Submit" primary={true} />
                        </form>
                    </mat.CardText>
                </mat.Card>
            </div>
        )
    }
}

export default CompanaySignup;