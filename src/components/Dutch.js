import React from "react"

export default class Dutch extends React.Component {
    state = {
        item: '',
        sentence: ''
    }

    handleClick = (event) => {
        this.setState({item: event.target.alt})
        
        let msg = new SpeechSynthesisUtterance(event.target.alt)
        msg.lang='nl'
        window.speechSynthesis.speak(msg)
    }

    handleOrder = (event) => {
        this.setState({sentence: event.target.id})
        let msg = new SpeechSynthesisUtterance(`Mag ik een ${this.state.item}, alsjeblieft`)
        msg.lang='nl'
        window.speechSynthesis.speak(msg)
    }

    handlePrice = (event) => {
        let msg = new SpeechSynthesisUtterance(`Hoeveel kost een ${this.state.item}?`)
        msg.lang='nl'
        window.speechSynthesis.speak(msg)
    }

    handleCard = (event) => {
        let msg = new SpeechSynthesisUtterance(`Mag ik pinnen betalen?`)
        msg.lang='nl'
        window.speechSynthesis.speak(msg)
    }

    handleCash = (event) => {
        let msg = new SpeechSynthesisUtterance(`Mag ik contant betalen?`)
        msg.lang='nl'
        window.speechSynthesis.speak(msg)
    }

    handleComment = (event) => {
        let msg = new SpeechSynthesisUtterance(`Lekkerste ${this.state.item} wat ik ooit heb gehad!`)
        msg.lang='nl'
        window.speechSynthesis.speak(msg)
    }


    render(){
        return(<div>
            <h1>Dutch Food</h1>
            {this.state.item !== '' &&
            <div className='custom-sentence'>
                <h4>Useful Sentences:</h4>
                
                <div className='order dropdown'>
                <button className="btn btn-secondary dropdown-toggle" 
                    type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     Order
                 </button>
                 <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <button className="dropdown-item" id={`I'd like a ${this.state.item}`}
                        onClick={this.handleOrder}>{`I'd like a ${this.state.item}`}</button>
                    <button className="dropdown-item" onClick={this.handlePrice}>{`How much is a ${this.state.item}?`}</button>
                </div>
                </div>
                <div className='allergy'>

                </div>
                <div className='payment'>
                    <button onClick={this.handleCard}>Can I pay by card?</button>
                    <button onClick={this.handleCash}>Can I pay in cash?</button>
                </div>
                <div className='polite'>
                    <button onClick={this.handleComment}>{`The best ${this.state.item} I've ever had!`}</button> 
                </div>

                {/*Show the customized sentence*/}
                <h5>{this.state.sentence}</h5>
                
            </div>}

            <div className='item-display'>
                <img onClick={this.handleClick} src='/images/Stamppot.jpg' alt='stamppot'/>
                <img onClick={this.handleClick} src='/images/Haring.jpg' alt='haring'/> 
                <img onClick={this.handleClick} src='/images/Patat.jpg' alt='patat'/> 
                <img onClick={this.handleClick} src='/images/Bitterballen.jpg' alt='bitterballen'/>
                <img onClick={this.handleClick} src='/images/Stroopwafel.jpg' alt='stroopwafel'/>
                <img onClick={this.handleClick} src='/images/Hagelslag.jpg' alt='hagelslag'/>
                <img onClick={this.handleClick} src='/images/Oliebollen.jpg' alt='oliebollen'/>
                <img onClick={this.handleClick} src='/images/Pannenkoek.jpg' alt='pannenkoek'/>
              
            </div>
        </div>)
    }
}