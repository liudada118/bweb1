import React from 'react'
import Nav from '../nav/Nav'
import Aside from '../aside/Aside'
import './home.css'
import logo from '../../assets/image/logo.png'
export default function Home() {
    
    return (
        <>
            <Nav bgc='black'/>
            {/* <Aside /> */}
            <div className='homeContent font'>
                <div className="contentText">
                   <img src={logo} alt="" />

                </div>
            </div>
        </>
    )
}
