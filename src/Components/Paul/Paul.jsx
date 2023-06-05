import React from 'react'
import './Paul.css'
import image from '../Paul/Paul.jpg'
import { BsPlayFill } from 'react-icons/bs';
import black from './black.png'
import white from './white.png'
import add from './add.png'
const Paul = () => {
  return (
    <div className="parent">
     <div className='Paul'>
     <img src={image} alt="paul"/>
    </div>
    <div className="paul-content">
         <div className="btn-play">
          
            <button className="play"><img src={black} className='btn'/>Play</button>
            <button className="trailer"><img src={white} className='btn'/>Trailer</button>
            <img src={add} className='add'/>
         </div>
         <div className='description'>
         1h 47m | Drama
         <br/>
         <br/>
         As he faces execution, apostle Paul preaches the word of Christ as his companion,
         <br/>
         <br/> 
         Luke, pens a revolutionary book that leads to the birth of the church.
         </div>
        
    </div>

    </div>
    
  )
}

export default Paul