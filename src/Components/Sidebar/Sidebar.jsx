import React from 'react'
import './Sidebar.css'
import sidelogo from './disney_hotstar.jpg'
import { FaHome, FaSearch, FaClock, FaPlayCircle, FaUser,FaTv } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-logo'>
        <img src={sidelogo} alt='sidelogo' className='side-logo'/>
      </div>
      <div className='subscribe'>
        <button className='sub'>Upgrade </button>
      </div>
      <div className='sidebar-icon-group'>
      <div className='sidebar-icon'>
        <a href=''><FaUser/></a>
      </div>
      <div className='sidebar-icon'>
        <FaSearch/>
      </div>
      <div className='sidebar-icon'>
        <a href='/home'><FaHome/></a>
      </div>
      <div className='sidebar-icon'>
        <a href='/home/movie'><FaTv /></a>
      </div>  
      <div className='sidebar-icon'>
        <FaPlayCircle/>
       </div>
      <div className='sidebar-icon'>
        <FaClock/>
      </div>
      </div>
    </div>
  )
}

export default Sidebar