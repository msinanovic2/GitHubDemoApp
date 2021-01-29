import React, { useContext, useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Header from './Header'
import SearchPage from './SearchPage';
import LoginForm from './Components/LoginForm'
import { AuthService } from "./AuthService";
import {ProtectedRoute} from './ProtectedRoute'
import MyAccount from './Components/MyAccount';


export default function App() {
  const [loggedIn,setLoggedIn] = useState(false)
  useEffect(()=>{
    setLoggedIn(AuthService.isLoggedIn())
  },[])


  return ( 
    <Router >

      <Header loggedIn={loggedIn} setLoggedIn = {setLoggedIn}/>
       <Switch>
        <Route exact path ='/' component = {SearchPage}/>
        <Route  exact path = '/login'  render={(props)=><LoginForm setLoggedIn={setLoggedIn}/>} />
        <ProtectedRoute exact path ='/myaccount' component={MyAccount} setLoggedIn={setLoggedIn}/>
        <Redirect to='/'/>
      </Switch>
    </Router>
  )
}