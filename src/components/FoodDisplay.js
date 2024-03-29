import React from "react"
import { Link } from 'react-router-dom'
import { googleTranslate } from '../utils/googleTranslate'
import '../App.css'
import { general } from '../generalfood'
import { local } from '../localfood'
import { sentences } from '../sentences'

export default class FoodDisplay extends React.Component {
    state = {
        item: '',
        originalText: '',
        translatedText: '',
        showBottomDiv: false,
    }

    handleSubmit = (event) => {
        event.preventDefault()
    }

    handleChange = (event) => {
        this.setState({
            originalText: event.target.value
        })
    }

    handleClick = (event) => {
        this.setState({
            item: event.target.alt
        })
        this.translate(event.target.alt)
    }

    makeSentence = (index) => {
        const text = sentences[index].text
        const sentence = text.replace('ITEM', this.state.item)
        this.translate(sentence)
    }

    customizeSentence = (index) => {
        const text = sentences[index].text
        const sentence = text.replace('ITEM', this.state.originalText)
        this.translate(sentence)
    }

    translate = (input) => {
        let region = this.props.region
        googleTranslate.translate(input, 'en', region, (err, translation) => {
            this.setState(
                {translatedText: translation.translatedText},
                function(){
                    let msg = new SpeechSynthesisUtterance(this.state.translatedText)
                    msg.lang = region
                    window.speechSynthesis.speak(msg)
                }
            )
        })
    }

    render(){
        const btnInBtnDiv = 'btn btn-dark btn-lg'
        const btnInCard = 'btn btn-outline-secondary btn-lg btn-block'
        
        const output = general.map((item)=>{
            return <div key={item.name}>
                <img src={item.imgUrl} alt={item.name}
                height='150px' width='200px'
                onClick={this.handleClick}
                tabIndex="0" />
            </div>
        })

        const localOutput = local
            .filter(item => item.region === this.props.region)
            .map((item)=>{
            return <div key={item.name}>
                <img src={item.imgUrl} alt={item.name}
                height='150px' width='200px'
                onClick={this.handleClick}
                tabIndex="0" />
            </div>
        })

        return (<div>
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
            </div>

            <div className="collapse" id="collapseOrder">
                <div className="card card-body">
                    <button className={btnInCard}
                            onClick={()=>{this.makeSentence(0)}}>
                            Order this item
                    </button>
                    <button className={btnInCard}
                            onClick={()=>{this.makeSentence(1)}}>
                            Ask for price
                    </button>
                </div>
            </div>

            <div className="collapse" id="collapsePayment">
                <div className="card card-body">
                    <button className={btnInCard}
                            onClick={()=>{this.makeSentence(2)}}>
                            Pay in cash
                    </button>
                    <button className={btnInCard}
                            onClick={()=>{this.makeSentence(3)}}>
                            Pay by card
                    </button>
                    <button className={btnInCard}
                            onClick={()=>{this.makeSentence(4)}}>
                            Use coupon
                    </button>
                    <button className={btnInCard}
                            onClick={()=>{this.makeSentence(5)}}>
                            Ask for receipt
                    </button>
                </div>
            </div>

            <div className="collapse" id="collapseAllergy">
                <div className="card card-body">
                    <button className={btnInCard}
                            onClick={()=>{this.makeSentence(6)}}>
                            Vegetarian
                    </button>
                    <button className={btnInCard}
                            onClick={()=>{this.makeSentence(7)}}>
                            Gluten-free
                    </button>

                    <div className='allergy-div'>
                        <button className={btnInCard} 
                                onClick={()=>{this.customizeSentence(8)}}>
                                Allergic
                        </button> 
                        <form className='form-inline' 
                            onSubmit={this.handleSubmit}>
                            <input onChange={this.handleChange} 
                                value={this.state.originalText} type="text" className="form-control" 
                                placeholder="Item that you're allergic to" required />
                        </form>
                    </div>
                </div>
            </div>
            </div>

            <div className='food-display'>
                <h3>General Food</h3>
                <div className='container'>
                    {output}
                </div>
            </div>
            
            <div className='food-display'>
                <h3>Local Delicacies</h3>
                <div className='container'>
                    {localOutput}
                </div>
            </div>

            <Link to='/img-attribute'>
                <h6 className='footer' >Go to image attribution</h6>
            </Link>

            <div className='sticky-bottom'>

                {this.state.showBottomDiv === false && 
                <button className={btnInBtnDiv} 
                        onClick={()=>{this.setState({showBottomDiv: true})}}>Show Translated Text</button>}
                    
                {this.state.showBottomDiv === true && 
                <div>
                    <p>{this.state.translatedText}</p>
                    <button className={btnInBtnDiv} 
                            onClick={()=>{this.setState({showBottomDiv: false})}}>Hide</button>
                </div>}
                    
            </div>
        </div>)
    }
}