import React from 'react';
import './App.css';

// Importing the pages
import Register from './pages/register';
import Login from './pages/login';

function App() 
{    
  return (
    <div className='App'>
      <Register />
      <Login />
    </div>
   )
}

export default App;
