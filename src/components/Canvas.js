import React from "react"
import CanvasDraw from "react-canvas-draw";
import '../App.css'

export default class Canvas extends React.Component {
    state = {
        showCanvas: false
    }

    render(){
        return (<div>
            <button onClick={()=>{this.setState({showCanvas: true})}}>
                Draw an item
            </button>

            {this.state.showCanvas === true && 
            <div className='canvas-div'>
                
                <button onClick={()=>{this.myCanvas.clear()}}>Clear</button>
                <button onClick={()=>{this.myCanvas.undo()}}>Undo</button>
                <button onClick={()=>{this.setState({showCanvas: false})}}>Close</button>

                <CanvasDraw className='canvas-drawing-div' 
                ref={element => (this.myCanvas = element)}
                brushRadius='5' lazyRadius='0' 
                canvasHeight='500px' canvasWidth='500px' /> 
            </div>}
        </div>
        )
    }
}