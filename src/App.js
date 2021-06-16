import React from 'react';
import './App.css';
import HomePage from './Pages/Homepage/Homepage.component';
import ShopPage from './Pages/Shop/shop.component';
import {Switch,Route} from 'react-router-dom';
import Header from "./Components/Header/header.component";
import SigninSignup from "./Pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {auth,userProfileDocument} from '../src/firebase/firebase.utilites';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }
  unsubscribeFromAuth = null;
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth =>{
      if(userAuth){
        const userRef = await userProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser : {
              id: snapshot.id,
              ...snapshot.data()}
          }
          );
          console.log(this.state);

        });
      }
      
        this.setState({currentUser:userAuth});
      
    });
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }




  render(){
    return (
      <div>
        <Header currentUser ={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route  path='/shop' component ={ShopPage}/>
          <Route path='/sign-in' component = {SigninSignup}/>
        </Switch>
      </div>
  );
  
  }
}

export default App;
