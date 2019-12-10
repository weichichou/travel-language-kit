import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Dutch from './components/Dutch';
import Canvas from './components/Canvas';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Dutch />
      <Canvas />
    </div>
  );
}

export default App;
