import React from "react"
import CanvasDraw from "react-canvas-draw";
import '../App.css'

export default class Canvas extends React.Component {
    render(){
        return (<CanvasDraw brushRadius='5' lazyRadius='0'/>)
    }
}