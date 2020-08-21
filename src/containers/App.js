import React from 'react';
import './App.css';
import Login from '../components/Login/Login.js';
import Profile from './Profile/Profile.js';
import { Router } from "@reach/router";

function Error() {
    return (<h4>Wrong Credentials!! Please Try Again!</h4>)
}

function App() {
  return (
    <div>
    <Router>
    <Login path='/' />
    <Profile path='/profile' />
    <Error path='/error' />
    </Router>
    </div>
  );
}

export default App;
