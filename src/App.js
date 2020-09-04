import React from 'react';
import './App.css';
import Month from './components/month';

function App() {
  let date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();

  return (
    <div className='App'>
      <header className='App-header'>The calendar 2020</header>
      <Month />
    </div>
  );
}

export default App;
