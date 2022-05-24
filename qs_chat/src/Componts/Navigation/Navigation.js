import React from "react";
import logo from "./logo.png";
import "./Navigation.css";


const Navigation = (props) =>{

    
    
    switch(props.currentPage){

        case "home":
            return(        
                <nav className="dt w-100 border-box pa3 ph5-ns">
                    <a className="dtc v-mid mid-gray link dim w-25"  title="Home">
                        <img src={logo} className="dib w4 h4 br-100" alt="Site Name"/>
                    </a>
                    <div className="dtc v-mid w-75 tr">
                        <a className="f3 link dim black underline pa3 pointer" 
                            onClick={()=> props.onRouteChange('register')}  title="Register">
                                Register
                        </a>
                        <a className="f3 link dim black underline pa3 pointer" 
                            onClick={()=> props.onRouteChange('logIn')}  title="Sign in">
                                Sign In
                        </a>
                    </div>
                </nav>
            
            );
        case "chatting":
            return(
                <>        
                    <nav className="dt w-100 border-box pa3 ph5-ns">
                        
                        <a className="dtc v-mid mid-gray link dim w-25"  title="Home">
                            <img src={logo} className="dib w4 h4 br-100" alt="Site Name"/>
                        </a>



                        <div className="dtc v-mid w-75 tr">
                            <a className="f3 link dim black underline pa3 pointer" 
                                onClick={()=> props.onRouteChange('home')} title="Sign Out">
                                    Sign Out
                            </a>
                        </div>
                    </nav>
                    <div className="GFG">
                        User Name: {props.user.name}
                    </div>
                </>
            
            );
        case "register":
            return(        
                <nav className="dt w-100 border-box pa3 ph5-ns">
                    <a className="dtc v-mid mid-gray link dim w-25" href="#" title="Home">
                        <img src={logo} className="dib w4 h4 br-100" alt="Site Name"/>
                    </a>
                    <div className="dtc v-mid w-75 tr">
                        <a className="f3 link dim black underline pa3 pointer"
                            onClick={()=> props.onRouteChange('home')} href="#" title="Sign in">
                                Sign In
                        </a>
                    </div>
                </nav>
            
            );
    }
    
}



export default Navigation