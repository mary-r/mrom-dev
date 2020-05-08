import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Catbook from './components/Catbook/Catbook';
import Landing from './components/Landing/Landing';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Catbook />
      <Landing />
      {/* <About />
      <Work />
      <Contact />
      <Switch />
      <Links /> */}
    </div>
  );
}

export default App;
