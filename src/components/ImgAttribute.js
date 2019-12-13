import React from 'react';
import { Link } from 'react-router-dom'
import { local } from '../localfood'

export default class ImgAttribute extends React.Component {
    render(){
        const output = local
        .filter((item)=> item.hasOwnProperty("CC") === true)
        .map((item)=>{
            return <div>
                <img src={item.imgUrl} alt={item.name} width='200px'/>
                <p>
                    By <a href={item.link}>{item.author}</a>
                    , is licensed under <a href={item.CClink}>{item.CC}</a>
                </p>
            </div>
        })
        return (<div className='img-attribute'>
            <Link to='/'>
                <button className='btn btn-dark btn-lg'>Close</button>
            </Link>
            <h3>Image Attribution</h3>
            <h5>Images that are not listed below are downloaded from 
                <a href='https://www.pexels.com/'>Pexels</a>,
            </h5>
            <h5> where all photos are free to use and attribution are not required.</h5>
            <h5 className='pexelLink'>
                <a href='https://www.pexels.com/photo-license/'> See photo license on Pexels</a>.
            </h5>
            <div>
                {output}
            </div>
        </div>)
    }
}