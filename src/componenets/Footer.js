import React from 'react'
import logo from "../Resource/logo.jpg"
export default function Footer() {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={logo} alt="logo" />
                <h1>Sirus AI</h1>
            </div>
            <div className="copyrigtht">
                <span>Copyright © 2023 Sirus AI. All rights reserved.</span>
            </div>    
            <div className="social-links">
             <a href="/"> <i className="fa-brands fa-facebook"></i></a>
              <a href="https://www.instagram.com/sirusai2023/"><i className="fa-brands fa-instagram"></i></a>
             <a href="/"> <i className="fa-brands fa-twitter"></i></a>
             <a href="/"> <i className="fa-brands fa-linkedin-in"></i></a>
              <a href="https://www.youtube.com/@SirusAI"><i className="fa-brands fa-youtube"></i></a>
            </div>
        </div>
      


    )
}
