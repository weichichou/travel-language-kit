import React from "react"
import '../App.css'

export default class Canvas extends React.Component {
    render(){
        return (<div>
           <canvas id="myCanvas" width="400" height="350"></canvas> 
        </div>)
    }
}