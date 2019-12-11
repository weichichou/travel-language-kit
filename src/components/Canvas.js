import React from "react"
import { Link } from "react-router-dom"
import CanvasDraw from "react-canvas-draw";
import '../App.css'

export default class Canvas extends React.Component {
    render(){
        const btnInBtnDiv = 'btn btn-dark btn-lg'
        return (
            <div className='canvas-div'>
                <Link to='/'>
                    <button className={btnInBtnDiv}>Close</button>
                </Link>
                <button className={btnInBtnDiv} onClick={()=>{this.myCanvas.clear()}}>Clear</button>
                <button className={btnInBtnDiv} onClick={()=>{this.myCanvas.undo()}}>Undo</button>
                
                <CanvasDraw className='canvas-drawing-div' 
                ref={element => (this.myCanvas = element)}
                brushRadius={5} lazyRadius={0} 
                canvasHeight='500px' canvasWidth='500px' /> 
            </div>
        )
    }
}