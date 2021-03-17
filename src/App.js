import React from 'react';
import './App.css';
import HomePage from './Homepage.component';
import {Route} from 'react-router-dom';
function App() { 
  const HatsPage = () =>(
    <div><h1>This is hats page</h1></div>
  );
    return (
      <div>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/hats' component ={HatsPage}/>
      </div>
  );
  
}

export default App;
