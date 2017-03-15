import React, { Component } from 'react';
import './signup.css';
import * as mat from 'material-ui';
// import {browserHistory,Router,Route, IndexRoute,Link,IndexLink} from 'react-router';

class SignUp extends Component {
   
    constructor(props) {
        super(props);
       
        this.state = {name: '', email: '', password: '',major: '',experience:'' };
        this.handleSubmit = this.handleLoginSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }


    componentDidMount() {
        this.props.loadInitialState();
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
        var name = this.refs.name.getValue();
        var email = this.refs.email.getValue();
        var password = this.refs.password.getValue();
        var major = this.refs.major.getValue();
        var experience  = this.refs.experience.getValue();
        
        var userObj = { name: name , email: email, password: password,major: major,experience:experience };
        this.props.signUpRequest(userObj);
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
        // const signupMain = {
        //     width : '60%',
        //     margin : '0 auto'
        // }
        // const { application } = this.props.application;
        return (
            <div className="main-login-div">
               
                <mat.Card className="signmain">
                    <mat.CardTitle title="Student SignUp" className="text"/>
                    <mat.CardText>
                        {/*<p>Already Have account? <Link to="/login">Login</Link></p>*/}
                        <form onSubmit={this.handleSubmit} onChange={this.clearErrors}>
                            <h3>Account Info</h3>
                            <mat.Divider />
                              <mat.TextField
                                hintText="John Doe"
                                floatingLabelText="Name"
                                className="full-width-container"
                                ref="name"
                                name="name"
                                required={true}
                                type="text"
                                onChange={this.handleInputChange}
                                /><br />

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
                          
                            <mat.TextField
                                hintText="Enter Skills"
                                floatingLabelText="Enter Major Skills"
                                className="full-width-container"
                                ref="major"
                                name="major"
                                required={true}
                                type="text"
                                onChange={this.handleInputChange}
                                /><br />
                           
                            <mat.TextField
                                hintText="Enter Experience"
                                floatingLabelText="Enter Experience"
                                className="full-width-container"
                                ref="experience"
                                name="experience"
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
        );
    }
}

export default SignUp;