import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Test from './components/Test';
import VoiceTest from './components/VoiceTest';
import Dutch from './components/Dutch';
import Canvas from './components/Canvas';

function App() {
  return (
    <div className="App">
      {/* <Test /> */}
      {/* <VoiceTest /> */}

      <Dutch />
      <Canvas />
    </div>
  );
}

export default App;
