import React from "react";
import "./Register.css";

const Register = () => {
    return (
        <main className="ba mw5 mw6-ns center  bw2 pa4 black-80">
            <div className="measure center">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f2 fw6 ph0 mh0">Register</legend>

                <div className="mt3">
                    <label className="db fw6 lh-copy f5" htmlFor="email-address">Email</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                </div>

                <div className="mv3">
                    <label className="db fw6 lh-copy f5" htmlFor="password">Password</label>
                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                </div>

              
                </fieldset>
                <div className="">
                    <input 
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                        type="submit" 
                        value="Register"
                    />
                </div>

            </div>
        </main>
    );
}

export default Register;