import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Map from 'pigeon-maps';
import Canvas from './components/Canvas';
import FoodDisplay from './components/FoodDisplay';
import { coordinates } from './coordinates'
import ImgAttribute from './components/ImgAttribute';

class App extends React.Component {  
    state = {
        region: 'nl',
        name: 'The Netherlands',
        showMap: false
    }

    getLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { coords } = position
            this.coordsToCountry(coords.latitude, coords.longitude)  
        }, (error) => {
            console.error(error)
        })
    }

    chooseFromMap = ({ latLng }) => {
        this.coordsToCountry(latLng[0], latLng[1])
    }

    coordsToCountry = (latitude, longitude) => {
        const found = coordinates
            .filter((element) => {
            return latitude >= element.latitude[0] && latitude <= element.latitude[1]
            })
            .find((element) => {
            return longitude >= element.longitude[0] && longitude <= element.longitude[1]
            })
        if (found) {
            this.setState({region: found.region, name: found.name}) 
        }else{
            window.alert('Sorry, no data for this region yet.')
        }    
    }

    render(){
        return (<Router>
        <div className="App">
            <div className='header-div'>
                <Link to='/canvas'>
                <button className='btn btn-dark btn-lg'>
                    <i className="fas fa-paint-brush"></i>
                </button>
                </Link>

                <h1>Travel Language Kit</h1>
                
                <div className="dropdown">
                <button className='btn btn-dark btn-lg dropdown-toggle' 
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-globe-asia"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                    <button onClick={this.getLocation} className="dropdown-item">Get current location</button>
                    
                    <button onClick={()=>{this.setState({showMap: true})}}
                            className="dropdown-item">Choose from map</button>
                    <div className="dropdown-divider"></div>
                    
                    <button className="dropdown-item disabled">Frequently visited</button>
                    <button onClick={()=>{this.setState({region: 'zh-TW'})}} 
                            id='zh-TW' className="dropdown-item">Taiwan
                    </button>
                </div>
                </div>
            </div>

            {this.state.showMap === true && 
            <div className='map-div'>
                <button onClick={()=>{this.setState({showMap: false})}} 
                        className='btn btn-dark btn-lg'>Close
                </button>
                <p>{`Location: ${this.state.name}`}</p>
                <Map center={[52, 4]} zoom={3.5} width={600} height={400}
                     onClick={this.chooseFromMap}>
                </Map>
            </div>}

            <Route path='/' exact render={() => 
                <FoodDisplay region={this.state.region}/>} 
            />
            <Route path='/canvas' component={Canvas} />
            <Route path='/img-attribute' component={ImgAttribute} />
        </div>
        </Router>)
    }
}

export default App;
