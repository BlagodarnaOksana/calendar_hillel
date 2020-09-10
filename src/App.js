import React from 'react';
import './App.css';
import Month from './components/month/month';
import Year from './components/year/year';

function App() {
  
  return (
    <div className='App'>
      <header className='App-header'>
      <Year />
      </header>
      <Month />
      

    </div>
  );
}

export default App;
