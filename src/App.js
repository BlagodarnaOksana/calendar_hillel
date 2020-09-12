import React from 'react';
import './App.css';
import Year from './components/year/year';
import Navbar from './components/navbar/navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

function App() {
  
  return (
    <Router>
      <Navbar />
      
      <Route path="/year/:year" exact render={({match})=>{
        return(
          <Year year={match.params.year} />
        )
      }}/>
    
      <Route path="/today" exact render={()=> {
        const today = new Date();
        const redirectPath = `/year/${today.getFullYear()}`;
        return (<Redirect to={redirectPath} />)
      }}/>
      
    </Router>
  );
}

export default App;
