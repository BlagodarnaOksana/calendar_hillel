import React from 'react';
import './App.css';
import Year from './components/year/year';
import Navbar from './components/navbar/navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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
     
      
    </Router>
  );
}

export default App;
