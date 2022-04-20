
import './App.css';
import Navigation from './Componts/Navigation/Navigation';
import LogIn from './Componts/LogIn/LogIn';

import React from 'react';

class App  extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      page: 'home'
    };
  }


  render(){
    return(
      <div>
        <Navigation currentPage =  {this.state.page}/>
        
        <LogIn/>
      </div>
    );
  }
}

export default App;
