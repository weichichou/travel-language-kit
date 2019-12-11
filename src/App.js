import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Canvas from './components/Canvas';
import Header from './components/Header';
import FoodDisplay from './components/FoodDisplay';

class App extends React.Component {  
  render(){
    return (<Router>
    <div className="App">
      <Header />
      <Route path='/' exact component={FoodDisplay} />
      <Route path='/canvas' component={Canvas} />
    </div>
    </Router>)
  }
}

export default App;
