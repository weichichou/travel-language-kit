import React from "react"
import { googleTranslate } from '../utils/googleTranslate'
import { general } from '../generalfood'
import '../App.css'

export default class FoodDisplay extends React.Component {
    
    render(){
        return (<div>
            {general.map(dish => <p>{dish.name}</p>)}
        </div>)
    }
}