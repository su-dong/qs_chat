import React from "react";
import logo from "./logo.png";
import "./Logo.css";

const Logo = () =>{
    return(
        <div >
            <img src={logo} class="br-100 pa1 ba b--black-10 h3 w3" alt="avatar"/>
            <h1 class="f5 f4-ns fw6 mid-gray">QS Chat</h1>
        </div>
    );
}

export default Logo;