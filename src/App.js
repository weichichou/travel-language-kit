import React from 'react';
// import superagent from 'superagent'
// import logo from './logo.svg';
import './App.css';
import Dutch from './components/Dutch';
import Canvas from './components/Canvas';
import Header from './components/Header';
import FoodDisplay from './components/FoodDisplay';

class App extends React.Component {
  // componentDidMount(){
  //   superagent
  //     .get('/dishes.json')
  //     .then(res => console.log(res))
  // }
  
  render(){
    return (
    <div className="App">
      <Header />
      <FoodDisplay />
      {/* <Dutch /> */}
      {/* <Canvas /> */}
    </div>
    )
  }
}

export default App;
