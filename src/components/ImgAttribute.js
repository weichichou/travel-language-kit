import React from 'react';
import { Link } from 'react-router-dom'

export default class ImgAttribute extends React.Component {
    render(){
        return (<div>
            <Link to='/'>
                <button className='btn btn-dark btn-lg'>Close</button>
            </Link>
            <h3>Image Attribution</h3>

        </div>)
    }
}