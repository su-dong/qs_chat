
import './App.css';
import Navigation from './Componts/Navigation/Navigation';

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
      <Navigation page =  {this.state.page}/>
    );
  }
}

export default App;
