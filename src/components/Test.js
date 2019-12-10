import React from "react"
import { googleTranslate } from '../utils/googleTranslate'

export default class Test extends React.Component {
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
        let output = ''
        let text = this.state.originalText
        
        googleTranslate.translate(text, 'nl', function(err, translation){
            console.log(translation.translatedText)
            output = translation.translatedText
            console.log('output inside callback???', output)
            return output
            
        })
        console.log('output???', output)

        //this.setState({translatedText: output})
    }

    render(){
        return (<div>
            <h1>Test</h1>
            
            <form className='form-div' onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Item</label>
                    <input onChange={this.handleChange} name='originalText' value={this.state.originalText} type="text" className="form-control" placeholder="Item" required />
                </div>
                <button type="submit" className="btn btn-info">Submit</button>
            </form>
            
            <h5>
                {this.state.translatedText}
            </h5>

        </div>)
    }
}