import React from "react";
import "./Register.css";

class Register extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            name: ''
        }
    }


    onNameInput = (event) =>{
        this.setState({name: event.target.value});
    }

    onEmailInput =(event) =>{
        this.setState({email:event.target.value});
    }
    onPasswordInput =(event) =>{
        this.setState({password:event.target.value});
    }

    onSubmit = () =>{
        fetch('http://localhost:1000/register', {
            method : 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email:this.state.email,
                password:this.state.password,
                name:this.state.name
            })
        })
        .then(response => response.json())
        .then(user =>{
            if(user){
                this.props.onRouteChange('register', 'any');
                this.props.updateUser(user);
            }
            
        })

    }




    render(){
        return (
            <main className="ba mw5 mw6-ns center  bw2 pa4 black-80">
                <div className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f2 fw6 ph0 mh0">Register</legend>

                    <div className="mt3">
                        <label className="db fw6 lh-copy f5" htmlFor="email-address">Name</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="name" name="mane"  id="name" onChange={this.onNameInput}/>
                    </div>

                    <div className="mt3">
                        <label className="db fw6 lh-copy f5" htmlFor="email-address">Email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" onChange={this.onEmailInput}/>
                    </div>

                    <div className="mv3">
                        <label className="db fw6 lh-copy f5" htmlFor="password">Password</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" onChange={this.onPasswordInput} />
                    </div>

                
                    </fieldset>
                    <div className="">
                        <input 
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                            type="submit" 
                            value="Register"
                            onClick={this.onSubmit}
                        />
                    </div>

                </div>
            </main>
        );
    }
}

export default Register;