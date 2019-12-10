import React from "react"
import CanvasDraw from "react-canvas-draw";
import '../App.css'

export default class Canvas extends React.Component {
    state = {
        showCanvas: false
    }
    
    handleClick = () => {
        this.setState({showCanvas: true})
    }

    handleClose = () => {
        this.setState({showCanvas: false})
    }

    render(){
        return (<div>
            <button onClick={this.handleClick}>Draw an item</button>
            {this.state.showCanvas === true && 
            <div className='canvas-div'>
                
                <button>
                    Clear
                </button>

                <button onClick={this.handleClose}>
                    Close
                </button>

                <CanvasDraw className='canvas-drawing-div' brushRadius='5' lazyRadius='0' 
                canvasHeight='500px' canvasWidth='500px' /> 
            </div>}
        </div>
        )
    }
}