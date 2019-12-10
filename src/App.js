import React from 'react';
import superagent from 'superagent'
// import logo from './logo.svg';
import './App.css';
import Dutch from './components/Dutch';
import Canvas from './components/Canvas';
import Header from './components/Header';

class App extends React.Component {
  componentDidMount(){
    superagent
      .get('/dishes.json')
      .then(res => console.log(res))
  }
  
  render(){
    return (
    <div className="App">
      <Header />
      <Dutch />
      <Canvas />
    </div>
    )
  }
}

export default App;
