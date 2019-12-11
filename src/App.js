import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Canvas from './components/Canvas';
// import Header from './components/Header';
import FoodDisplay from './components/FoodDisplay';

class App extends React.Component {  
  render(){
    return (<Router>
    <div className="App">
        <div className='header-div'>
            <Link to='/canvas'>
            <button className='btn btn-dark btn-lg'>
                <i class="fas fa-paint-brush"></i>
            </button>
            </Link>

            <h1>Travel Language Kit</h1>

            <button className='btn btn-dark btn-lg'>
                <i class="fas fa-globe-asia"></i>
            </button>
        </div>
        <Route path='/' exact component={FoodDisplay} />
        <Route path='/canvas' component={Canvas} />
    </div>
    </Router>)
  }
}

export default App;
