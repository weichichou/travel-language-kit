import React from "react"

export default class VoiceTest extends React.Component {
    state= {
        text: 'Aaardebei'
    }
    
    handleClick =() => {
        let msg = new SpeechSynthesisUtterance(this.state.text)
        msg.lang='nl'
        window.speechSynthesis.speak(msg)
    }
    
    render(){
        return (<div>
            <h1>Voice Test</h1>
            <button onClick={this.handleClick}>Voice</button>
        </div>)
    }
}