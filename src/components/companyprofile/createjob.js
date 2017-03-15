import React, { Component } from 'react';
import * as mat from 'material-ui';
// import { browserHistory,Router,Route,IndexRoute,Link,IndexLink } from 'react-router';

class Createjobs extends Component{
    
    constructor(props){
        super(props);
        
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

     componentWillReceiveProps() {
        setTimeout(() => {
            if (!this.props.application || !this.props.application.user) {
                // browserHistory.push('/login');
            }
        }, 5)
    }

    handleSubmit(evt){
         evt.preventDefault();
         const job = this.refs.job.getValue();
         const description = this.refs.description.getValue();
         const field = this.refs.field.getValue();
         const experience = this.refs.experience.getValue();
   
         const userAllData= {
          
             job  : job,
             description :description,
             field : field,
             experience : experience
         }
         this.props.addNewjob(userAllData);
       
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
            <div>
                <mat.Card className="cardwidht">
                    <mat.CardTitle title="Create JObs"/>
                    <mat.CardText>
                        <form onSubmit={this.handleSubmit}>
                            <h2>Personal Info</h2>
                            <mat.Divider/>
                            <mat.TextField
                                hintText="JObs Name"
                                floatingLabelText="JObs Title"
                                className="full-width-container"
                                ref="job"
                                name="name"
                                required={true}
                                type="text"
                                onChange={this.handleInputChange}>
                            </mat.TextField><br/>

                            <mat.TextField
                                hintText="Description"
                                floatingLabelText="Description"
                                className="full-width-container"
                                ref="description"
                                name="name"
                                required={true}
                                type="text"
                                onChange={this.handleInputChange}>
                            </mat.TextField><br/>

                            <mat.TextField
                                hintText="Field"
                                floatingLabelText="Field"
                                className="full-width-container"
                                ref="field"
                                name="name"
                                required={true}
                                type="text"
                                onChange={this.handleInputChange}>
                            </mat.TextField><br/>
                         
                            <mat.TextField
                                hintText="Experience"
                                floatingLabelText="Experience"
                                className="full-width-container"
                                ref="experience"
                                name="name"
                                required={true}
                                type="text"
                                onChange={this.handleInputChange}>
                            </mat.TextField><br/>

                            <mat.RaisedButton  type="submit" label="Submit" primary={true}/>

                            
                        </form>
                    </mat.CardText>
                </mat.Card>
            </div>
        )
    }
}

export default Createjobs;