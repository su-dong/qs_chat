
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Navigation from './Componts/Navigation/Navigation';
import LogIn from './Componts/LogIn/LogIn';
import Register from './Componts/Register/Regisger';
import Chat from './Componts/Chat/Chat';

import React from 'react';

class App  extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      page: 'home',
      isSignedIn: false,
      user:{
        id: '',
        name: 'unknown',
        email: ''
      }

    };
  }

  updateUser = (data) =>{
    this.setState(
      {
        user:{
          id: data.id,
          name:data.name,
          email:data.email
        }
      }
    )
  }

  onRouteChange = (changeTo)=>{
    
    switch(changeTo){
      case 'home' :
        this.setState({page:'home'});
        return;
      case 'register':
        this.setState({page:'register'});
        return;
      case 'chatting':
        this.setState({page:'chatting'});
        return;
    }
  }

  changeRouteTo = (nextPage)=>{
    this.setState({page:nextPage});
  }


  render(){
    console.log(this.state.page);

    switch(this.state.page){
      case 'home':
        return(
          <div>
            <Navigation currentPage =  {this.state.page} onRouteChange = {this.onRouteChange} user = {this.state.user} />
            
            <LogIn changeRouteTo = {this.changeRouteTo} updateUser = {this.updateUser}/>
          </div>
        );
      case 'chatting':
        return(
          <div>
            <Navigation currentPage =  {this.state.page} onRouteChange = {this.onRouteChange} user = {this.state.user}/>

            <Chat Name = {this.state.user.name}/>
            
          </div>
        );
      case 'register':
        return(
          <div>
            <Navigation currentPage =  {this.state.page} onRouteChange = {this.onRouteChange} user = {this.state.user}/>
            <Register updateUser = {this.updateUser} onRouteChange = {this.onRouteChange}/>
          </div>
        );

    }





  }
}

export default App;
