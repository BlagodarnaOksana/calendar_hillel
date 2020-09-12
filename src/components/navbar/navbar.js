import React, { Component } from 'react';
//import React from 'react';
import './navbar.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";

class Navbar extends React.Component {

    render(){

    return (
        <div className='navbar'>
            <Link to="/today">
                <div>Current year</div>
            </Link>
            
            <a href='/today'>Current month</a>
            <a href='/today'>Today</a>
        </div>
    )}
}

export default Navbar;