import React from "react"

export default class Dutch extends React.Component {
    state = {
        text: ''
    }

    handleClick = (event) => {
        // this.setState({text: event.target.alt})
        
        let msg = new SpeechSynthesisUtterance(`Mag ik een ${event.target.alt}, alsjeblieft`)
        msg.lang='nl'
        window.speechSynthesis.speak(msg)
    }

    render(){
        return(<div>
            <h1>Dutch Food</h1>

            <div className='item-display'>
                <img onClick={this.handleClick} src='/images/Stamppot.jpg' alt='Stamppot'/>
                <img onClick={this.handleClick} src='/images/Haring.jpg' alt='Haring'/> 
                <img onClick={this.handleClick} src='/images/Patat.jpg' alt='Patat'/> 
                <img onClick={this.handleClick} src='/images/Bitterballen.jpg' alt='Bitterballen'/>
                <img onClick={this.handleClick} src='/images/Stroopwafel.jpg' alt='Stroopwafel'/>
                <img onClick={this.handleClick} src='/images/Hagelslag.jpg' alt='Hagelslag'/>
                <img onClick={this.handleClick} src='/images/Oliebollen.jpg' alt='Oliebollen'/>
                <img onClick={this.handleClick} src='/images/Pannenkoek.jpg' alt='Pannenkoek'/>
              
            </div>
        </div>)
    }
}