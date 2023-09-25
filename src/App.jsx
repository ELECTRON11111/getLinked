import { useState } from 'react';
import Layout from './containers/Layout/Layout';
import NavBar from './containers/NavBar/navBar';
import './App.css';


function App() {

  return (
    <div className='App'>
      {/* This App component represents the home page */}
      <Layout />
    </div>
  )
}

export default App
