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
        let text = this.state.originalText
        
        googleTranslate.translate(text, 'nl', (err, translation)=> {
            this.setState({translatedText: translation.translatedText})
        })
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
    
    render(){
        return (
            <div className="card card-body">
                <button className='btn btn-outline-secondary btn-lg btn-block' onClick={this.handleVeg}>Is it vegetarian?</button>
                <button className='btn btn-outline-secondary btn-lg btn-block' onClick={this.handleGlutenFree}>Is it gluten-free?</button>

                <form className='form-inline' onSubmit={this.handleSubmit}>
                {/* <div className="form-group"> */}
                    {/* <label>Item</label> */}
                    <input onChange={this.handleChange} name='originalText' 
                        value={this.state.originalText} type="text" className="form-control" 
                        placeholder="Item that you're allergic to" required />
                {/* </div> */}
                <button type="submit" className="btn btn-secondary">Submit</button>
            </form>

            </div>)
    }
}