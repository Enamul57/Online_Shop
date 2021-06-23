import React from 'react';
import './App.css';
import HomePage from './Pages/Homepage/Homepage.component';
import ShopPage from './Pages/Shop/shop.component';
import {Switch,Route} from 'react-router-dom';
import Header from "./Components/Header/header.component";
import SigninSignup from "./Pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {auth,userProfileDocument} from '../src/firebase/firebase.utilites';
import {connect} from "react-redux";
import {setCurrentUser} from "./Redux/user/user.action";

class App extends React.Component {
  
  unsubscribeFromAuth = null;
  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth =>{
      if(userAuth){
        const userRef = await userProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          }
          );

        });
      }
      
      setCurrentUser(userAuth);
      
    });
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }




  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route  exact path='/' component={HomePage}/>
          <Route  path='/shop' component ={ShopPage}/>
          <Route path='/sign-in' component = {SigninSignup}/>
        </Switch>
      </div>
  );
  
  }
}
const mapDispatchToProps = dispatch =>({
  setCurrentUser : user => dispatch(setCurrentUser(user))
});

export default connect(null,mapDispatchToProps)(App);
