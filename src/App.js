import React from 'react';
import './App.css';
import HomePage from './Pages/Homepage/Homepage.component';
import ShopPage from './Pages/Shop/shop.component';
import {Switch,Route,Redirect} from 'react-router-dom';
import Header from "./Components/Header/header.component";
import SigninSignup from "./Pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {auth,userProfileDocument} from '../src/firebase/firebase.utilites';
import {connect} from "react-redux";
import {setCurrentUser} from "./Redux/user/user.action";
import { createStructuredSelector } from 'reselect';
import {selectCurrentUser} from "./Redux/user/user.selector";
import CheckoutPage from './Pages/Checkout/checkout.component';

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
          <Route exact path='/checkout' component= {CheckoutPage}/>
          <Route path='/sign-in' render={()=>this.props.currentUser ? <Redirect to='/'/>:(<SigninSignup/>)}/>
        </Switch>
      </div>
  );
  
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})
const mapDispatchToProps = dispatch =>({
  setCurrentUser : user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
