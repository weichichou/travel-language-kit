import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Canvas from './components/Canvas';
import Header from './components/Header';
import FoodDisplay from './components/FoodDisplay';

class App extends React.Component {  
  render(){
    return (
    <div className="App">
      <Header />
      <FoodDisplay />
      {/* <Canvas /> */}
    </div>
    )
  }
}

export default App;
