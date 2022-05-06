import React from "react";
import "./LogIn.css";

class LogIn extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            email:'',
            password: ''
        }
    }


    onEmailInput= (event) => {
        this.setState({email:event.target.value});
    }

    onPasswordInput = (event) => {
        this.setState({password:event.target.value});
    }

    onSubmit = () =>{
        console.log('email', this.state.email);
        console.log('password', this.state.password);

        fetch('http://localhost:1000/signIn',{
            method: 'post',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({
                email:this.state.email,
                password: this.state.password
            })
        }).then(
            response => response.json()
        ).then(
            data =>{
                if(data.id){
                    console.log('already signed in');
                    this.props.updateUser(data);
                    this.props.changeRouteTo('chatting');
                }
                else{
                    console.log('cannot log in');
                }
            }
        )
    }

    render(){
        return (
            <main className="ba mw5 mw6-ns center  bw2 pa4 black-80">
                <div className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f2 fw6 ph0 mh0">Sign In</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f5" htmlFor="email-address">Email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" onChange={this.onEmailInput}/>
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f5" htmlFor="password">Password</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" onChange = {this.onPasswordInput}/>
                    </div>
                    <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label>
                    </fieldset>
                    <div className="">
                        <input 
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                            type="submit" 
                            value="Sign in"
                            onClick={this.onSubmit}
                        />
                    </div>
                    <div className="lh-copy mt3">
                        <a href="#0" className="f5 link dim black db">Sign up</a>
                        <a href="#0" className="f5 link dim black db">Forgot your password?</a>
                    </div>
                </div>
            </main>
        );
    }
}

export default LogIn;