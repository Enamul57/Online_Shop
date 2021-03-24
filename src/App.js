import React from 'react';
import './App.css';
import HomePage from './Pages/Homepage/Homepage.component';
import ShopPage from './Pages/Shop/shop.component';
import {Route} from 'react-router-dom';
import Header from "./Components/Header/header.component";
import SignInSignUp from "./Pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
function App() { 
  
    return (
      <div>
        <Header/>
        <switch>
          <Route exact path='/' component={HomePage}/>
          <Route  path='/shop' component ={ShopPage}/>
          <Route path='/sign-in' component={SignInSignUp}/>
        </switch>
      </div>
  );
  
}

export default App;
