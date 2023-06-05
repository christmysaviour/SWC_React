import React from 'react'
import './Navbar.css'
import logo from './Disney-Symbol.png'
function Navbar() {
  return (
    <div className='Navbar'>
        <a href='/home'><img src={logo} className='logo' /></a>
        <button className='nav-btn'>Login</button>
    </div>
  )
}

export default Navbar
