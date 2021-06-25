import React, { Component } from 'react'
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import { Route, Switch, Link } from 'react-router-dom'
import ShopPage from './pages/shop/shop.component';
import Header from './header/header.component';
import SignInAndSignOut from './pages/sign-in-sign-out/sign-in-sign-out.component';
import { auth } from './firebase/firebase.utils';


class App extends React.Component{
      constructor(){
            super();
            this.state = {
                  currentUser: null
            }
      }

      unsubcribeFromAuth = null;

      componentDidMount(){

           this.unsubcribeFromAuth =  auth.onAuthStateChanged(user => {
                  this.setState({
                        currentUser: user
                  })
                  console.log(user)
            })
            
      }

      componentWillUnmount(){
            this.unsubcribeFromAuth()
      }

      render(){
            return (
            <div>
                  <Header currentUser = {this.state.currentUser} />
                  <Switch>
                        <Route exact path='/' component={Homepage}/>
                        <Route exact path='/shop' component={ShopPage} />
                        <Route exact path="/signin" component={SignInAndSignOut} />
                  </Switch>
            </div>
            )
      }
  
}

export default App;
