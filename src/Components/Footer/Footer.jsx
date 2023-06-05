import React from 'react'
import './Footer.css'
import twitter from './twitter.png'
import fb from './fb.png'

const Footer = () => {
  return (
    <div className='Footer'>
        <div className="footer-1">
            <h5>Company</h5>
            <h5>About Us</h5>
            <h5>Careers</h5>
            <h5>© 2023 STAR. All Rights Reserved.</h5>
            <h5>Terms Of Use  | Privacy Policy  | FAQ</h5>
        </div>
        <div className="footer-2">
            <h5>View Website in</h5>
            <h5>✓ English</h5>
        </div>
        <div className="footer-3">
            <h5>Need Help?</h5>
            <h5>Visit Help center</h5>
            <h5>Share Feedback</h5>
        </div>
        <div className="footer-4">
            <h5>Connect with Us</h5>
           <img src={twitter} width="25px" />
           <img src={fb}  width="25px" />
        </div>
    </div>
  )
}

export default Footer