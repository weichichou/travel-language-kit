import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Canvas from './components/Canvas';
// import Header from './components/Header';
import FoodDisplay from './components/FoodDisplay';

class App extends React.Component {  
    state = {
        region: 'nl'
    }

    getLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
          console.log(position)
        }, (error) => {
          console.error(error)
        })
    }

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
                
                <div className="dropdown">
                <button className='btn btn-dark btn-lg dropdown-toggle' 
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                        onClick={this.getLocation}>
                    <i class="fas fa-globe-asia"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                    <button className="dropdown-item">Get current location</button>
                    <button className="dropdown-item">Choose from map</button>
                    <div className="dropdown-divider"></div>
                    <button className="dropdown-item disabled">Frequently visited</button>
                    <button className="dropdown-item">Taiwan</button>
                    <button className="dropdown-item">Japan</button>
                </div>
                </div>
            </div>
            <Route path='/' exact render={() => 
                <FoodDisplay region={this.state.region}/>} 
            />
            <Route path='/canvas' component={Canvas} />
        </div>
        </Router>)
    }
}

export default App;
