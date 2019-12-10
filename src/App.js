import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Test from './components/Test';
import VoiceTest from './components/VoiceTest';
import Dutch from './components/Dutch';

function App() {
  return (
    <div className="App">
      {/* <Test /> */}
      <VoiceTest />

      <Dutch />
    </div>
  );
}

export default App;
