import React from 'react';
import './App.css';
import Year from './components/year/year';
import Month from './components/month/month';
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

      <Route path="/year/:year/month/:month" exact render={({match})=>{
        return(
          <Month firstDay={new Date(Number(match.params.year), Number(match.params.month)-1)} />
        )
      }}/>

      <Route path="/currentmonth" exact render={()=> {
        const today = new Date();
        const redirectPath = `/year/${today.getFullYear()}/month/${today.getMonth()+1}`;
        return (<Redirect to={redirectPath} />)
      }}/>
    
      <Route path="/currentyear" exact render={()=> {
        const today = new Date();
        const redirectPath = `/year/${today.getFullYear()}`;
        return (<Redirect to={redirectPath} />)
      }}/>

      <Route path="/today" exact render={()=> {
        
        return (
        <div className="today">
          {new Date().toLocaleString('default', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </div>)
      }}/>
      
    </Router>
  );
}

export default App;
