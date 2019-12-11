import React from "react"
import { googleTranslate } from '../utils/googleTranslate'
import { general } from '../generalfood'
import { sentences } from '../sentences'
import '../App.css'

export default class FoodDisplay extends React.Component {
    state = {
        item: '',
        region: 'nl',
        originalText: '',
        translatedText: ''
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
        this.setState({item: event.target.alt})
    }

    makeSentence = (index) => {
        // const id = event.target.id - 1
        const text = sentences[index].text
        const sentence = text.replace('ITEM', this.state.item)
        this.translate(sentence)
    }

    customizeSentence = () => {
        const text = sentences[8].text
        const sentence = text.replace('ITEM', this.state.originalText)
        this.translate(sentence)
    }

    translate = (sentence) => {
        let region = this.state.region
        googleTranslate.translate(sentence, region, (err, translation) => {
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
                onClick={this.handleClick}/>
            </div>
        })

        return (<div>
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
                                onClick={()=>{this.customizeSentence()}}>
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

            <div className='food-display'>
                <h3>General Food</h3>
                <div className='container'>
                    {output}
                </div>
            </div>
            
            <div className='food-display'>
                <h3>Local Delicacies</h3>
            </div>

        </div>)
    }
}