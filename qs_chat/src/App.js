
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
      page: 'chatting',
      isSignedIn: false,
      user:{
        id: '',
        name: '',
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

  onRouteChange = (currentRoute, buttonClicked)=>{
    console.log('in router change');
    
    switch(currentRoute, buttonClicked){
      case 'home' && 'logIn':
        console.log(1);
        this.setState({page: 'home'});
        return;
      case 'home'&& 'register':
        console.log(2);
        this.setState({page:'register'});
        return;
      case 'chatting'&& 'signOut':
        console.log(3);
        this.setState({page:'home'});
        return;
      case 'register'&&'any':
        console.log(4);
        this.setState({page:'home'});
        return;
      case 'signIn'&&'any':
        console.log(1);
        console.log("in what needed");
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
            <Navigation currentPage =  {this.state.page} onRouteChange = {this.onRouteChange} />
            
            <LogIn changeRouteTo = {this.changeRouteTo} updateUser = {this.updateUser}/>
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
            <Register updateUser = {this.updateUser} onRouteChange = {this.onRouteChange}/>
          </div>
        );

    }





  }
}

export default App;
