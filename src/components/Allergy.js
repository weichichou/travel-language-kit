import React from "react"
import { googleTranslate } from '../utils/googleTranslate'
import '../App.css'

export default class Allergy extends React.Component {
    state = {
        originalText: '',
        translatedText: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
    }

    handleVeg = (event) => {
        let msg = new SpeechSynthesisUtterance(`Is het vegetarisch?`)
        msg.lang='nl'
        window.speechSynthesis.speak(msg)
    }

    handleGlutenFree = (event) => {
        let msg = new SpeechSynthesisUtterance(`Is het glutenvrij?`)
        msg.lang='nl'
        window.speechSynthesis.speak(msg)
    }

    handleAllergy = (event) => {
        
        googleTranslate.translate(event.target.id, 'nl', (err, translation)=> {
            this.setState(
                {translatedText: translation.translatedText},
                function(){
                    let msg = new SpeechSynthesisUtterance(`Ik ben allergisch voor ${this.state.translatedText}`)
                    msg.lang='nl'
                    window.speechSynthesis.speak(msg)
                }
            )
        })
    } 
    
    render(){
        let allergyItem = ''
        this.state.originalText ? allergyItem = this.state.originalText : allergyItem = '......'
        
        return (
            <div className="card card-body">
                <button className='btn btn-outline-secondary btn-lg btn-block' onClick={this.handleVeg}>Is it vegetarian?</button>
                <button className='btn btn-outline-secondary btn-lg btn-block' onClick={this.handleGlutenFree}>Is it gluten-free?</button>
                
                <button id={allergyItem} className='btn btn-outline-secondary btn-lg btn-block' 
                onClick={this.handleAllergy}>{`I am allergic to ${allergyItem}`}</button> 

                <form className='form-inline' onSubmit={this.handleSubmit}>
                    <label>Customize your sentence: </label> 
                    <input onChange={this.handleChange} name='originalText' 
                        value={this.state.originalText} type="text" className="form-control" 
                        placeholder="Item that you're allergic to" required />
                </form>

            </div>)
    }
}