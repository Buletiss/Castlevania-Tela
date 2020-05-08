import React from 'react'
import img from '../../assets/thumb-122901.jpg'
import './img.css'

export default function Img() {
    return (
        <div className='divisor'>
            <img src={img} alt='img'/>
        </div>
    )
}