import React, { Component } from 'react';
//import React from 'react';
import './navbar.css';

class Navbar extends React.Component {

    render(){

    return (
        <div className='navbar'>
            <a href='/today'>Current year</a>
            <a href='/today'>Current month</a>
            <a href='/today'>Today</a>
        </div>
    )}
}

export default Navbar;