
import './App.css';

import Navigation from './Componts/Navigation/Navigation';
import LogIn from './Componts/LogIn/LogIn';
import Register from './Componts/Register/Regisger';
import Chat from './Componts/Chat/Chat';

import React from 'react';

class App  extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      page: 'chatting'
    };
  }

  onRouteChange = (currentRoute, buttonClicked)=>{
    switch(currentRoute, buttonClicked){
      case 'home', 'logIn':
        this.setState({page: 'home'});
        return;
      case 'home', 'register':
        this.setState({page:'register'});
        return;
      case 'chatting', 'signOut':
        this.setState({page:'home'});
        return;
      case 'register', 'any':
        this.setState({page:'home'});
        return;
    }
  }


  render(){
    console.log(this.state.page);

    switch(this.state.page){
      case 'home':
        return(
          <div>
            <Navigation currentPage =  {this.state.page} onRouteChange = {this.onRouteChange} />
            
            <LogIn/>
          </div>
        );
      case 'chatting':
        return(
          <div>
            <Navigation currentPage =  {this.state.page} onRouteChange = {this.onRouteChange}/>

            <Chat />
            
          </div>
        );
      case 'register':
        return(
          <div>
            <Navigation currentPage =  {this.state.page} onRouteChange = {this.onRouteChange}/>
            <Register/>
          </div>
        );

    }





  }
}

export default App;
