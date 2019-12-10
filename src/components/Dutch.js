import React from "react"
import '../App.css'
import Allergy from "./Allergy"

export default class Dutch extends React.Component {
    state = {
        item: ''
    }

    handleClick = (event) => {
        this.setState({item: event.target.alt})
        
        let msg = new SpeechSynthesisUtterance(event.target.alt)
        msg.lang='nl'
        window.speechSynthesis.speak(msg)
    }

    handleOrder = (event) => {
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
        const btnInBtnDiv = 'btn btn-dark btn-lg'
        const btnInCard = 'btn btn-outline-secondary btn-lg btn-block'

        return(<div className='display-div'>
            
            {this.state.item === '' && <h5 className='sticky-top'>Pick an item and start the conversation!</h5>}

            {this.state.item !== '' &&
            <div className='sticky-top'>

                <div className='button-div'>
                    <button className={btnInBtnDiv} 
                        type="button" data-toggle="collapse" 
                        data-target="#collapseOrder"
                        aria-expanded="false" aria-controls="collapseOrder">
                        Order
                    </button>
                    <button className={btnInBtnDiv}
                        type="button" data-toggle="collapse" 
                        data-target="#collapsePayment"
                        aria-expanded="false" aria-controls="collapsePayment">
                        Payment
                    </button>
                    <button className={btnInBtnDiv}
                        type="button" data-toggle="collapse" 
                        data-target="#collapseAllergy"
                        aria-expanded="false" aria-controls="collapseAllergy">
                        Allergy
                    </button>
                    <button className={btnInBtnDiv}
                        type="button" data-toggle="collapse" 
                        data-target="#collapseComment"
                        aria-expanded="false" aria-controls="collapseComment">
                        Comment
                    </button>
                </div>
                
                    
                <div className="collapse" id="collapseOrder">
                    <div className="card card-body">
                        <button className={btnInCard} onClick={this.handleOrder}>{`I'd like a ${this.state.item}`}</button>
                        <button className={btnInCard} onClick={this.handlePrice}>{`How much is a ${this.state.item}?`}</button>
                    </div>
                </div>
                
                <div className="collapse" id="collapsePayment">
                    <div className="card card-body">
                        <button className={btnInCard} onClick={this.handleCard}>Can I pay by card?</button>
                        <button className={btnInCard} onClick={this.handleCash}>Can I pay in cash?</button>
                    </div>
                </div>

                <div className="collapse" id="collapseAllergy">
                    <Allergy />
                </div>

                <div className="collapse" id="collapseComment">
                    <div className='card card-body'>
                        <button className={btnInCard} onClick={this.handleComment}>{`The best ${this.state.item} I've ever had!`}</button> 
                    </div>
                </div>
                

            </div>}

            <div className='item-display'>
                <img onClick={this.handleClick} src='/images/Stamppot.jpg' alt='stamppot'/>
                <img onClick={this.handleClick} src='/images/Haring.jpg' alt='haring'/> 
                <img onClick={this.handleClick} src='/images/Pannenkoek.jpg' alt='pannenkoek'/>
                <img onClick={this.handleClick} src='/images/Patat.jpg' alt='patat'/> 
                <img onClick={this.handleClick} src='/images/Bitterballen.jpg' alt='bitterballen'/>
                <img onClick={this.handleClick} src='/images/Stroopwafel.jpg' alt='stroopwafel'/>
                <img onClick={this.handleClick} src='/images/Hagelslag.jpg' alt='hagelslag'/>
                <img onClick={this.handleClick} src='/images/Oliebollen.jpg' alt='oliebollen'/>
                
              
            </div>
        </div>)
    }
}