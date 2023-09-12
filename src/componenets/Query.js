import React from 'react'
import "../Resource/home.css"
import query1 from "../Resource/query1.svg"
import query2 from "../Resource/query2.svg"
import query3 from "../Resource/query3.svg"
export default function Query() {
  return (
    <div>
      <div className="forth-section">
      <div className="top">
          <h2>Any Query? Reach Out To Us.</h2>
          <div className="separator"></div>
          <p>We Are Here To Help You Find A Solution That Suits Your Business Need.</p>
        </div>
        <div className="solutions solution-query">
          <div className="card card-query">
            <img src={query1} alt="" />
            <p>Get a visual representation of how we work!</p>
            <button>Schedule Demo</button>
          </div>
          <div className="card card-query">
            <img src={query2} alt="" />
            <p>Our sales expert is just one call away to meet your needs.</p>
          <a href="tel:+916383595092">  <button>Get in Touch</button></a>
          </div>
          <div className="card card-query">
            <img src={query3} alt="" />
            <p>Have a question?
              Chat with Us</p>
              <a href="https://www.instagram.com/direct/t/17844434654989939/"><button>Start Chat</button></a>
          </div>
        </div>
      </div>
    </div>
  )
}
