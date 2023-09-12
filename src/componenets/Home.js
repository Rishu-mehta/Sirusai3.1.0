import React from 'react'
import "../Resource/home.css"
import leadership from "../Resource/leadership.gif"
export default function Home() {
  document.title="Sirus AI - Home"
  return (
    <div className='home'>
      <div className="first-section">
        <div className="part1">
          <h1>Empowering Intelligence with <span>AI Innovation</span> .Let the AI rule the world.</h1>
          <div className="book-demo-bar">
            <div className="message-box"><span className="material-symbols-outlined">
              mail
            </span>
            </div>
            <div className="email-input">
              <input type="email" placeholder='Enter your email Address' />
            </div>
            <div className="book-demo"><button>Book Demo</button></div>
          </div>
          <div className="features">
            <div className="features-items">
              <span className="material-symbols-outlined">
                check_circle
              </span><h3>Increase efficiency</h3>
            </div>
            <div className="features-items">
              <span className="material-symbols-outlined">
                check_circle
              </span><h3>Reduce complexity</h3>
            </div>
            <div className="features-items">
              <span className="material-symbols-outlined">
                check_circle
              </span><h3>Aschive success</h3>
            </div>
          </div>
        </div>
        <div className="part2">
          <img src={leadership} alt="illustration" />
        </div>
      </div>
      <div className="second-section">
        <div className="top ">
          <h2>No Problems - Only Solutions With Sirus Tools</h2>
          <div className="separator"></div>
          <p>Solving Business Problems Through Modern Software.</p>
        </div>
        <div className="solutions">
          <div id="card1" className="card">
            <span id="card-span1" className="material-symbols-outlined">
              rocket_launch
            </span>
            <h5>Efficiency & Productivity</h5>
            <p>Automates repetitive tasks, reducing manual effort and increasing overall efficiency.
              Streamlines processes, leading to faster decision-making and execution of tasks
            </p>
          </div>
          <div id="card2" className="card">
            <span id="card-span2" className="material-symbols-outlined">
              support_agent
            </span>
            <h5>Personalization & Customer Experience</h5>
            <p>enables personalized customer interactions, enhancing user experience and satisfaction.
              Provides tailored product recommendations, increasing the likelihood of conversions</p>
          </div>
          <div id="card3" className="card">
            <span id="card-span3" className="material-symbols-outlined">
              sports_kabaddi
            </span>
            <h5>Competitive Advantage</h5>
            <p>Organizations adopting AI early gain a competitive edge in the market.
              AI-powered insights lead to innovative products and services, attracting more customers.
            </p>
          </div>
        </div>
      </div>
      <div className="third-section">
        <div className="top" id="top">
          <h2>Get Started With Ultimate Business Systems</h2>
          <div className="separator"></div>
          <p>Solving Real Business Challenges With A Robust & Impeccable System</p>
        </div>
        <div className="book-demo-bar book-demo-bar2">
          <div className="message-box"><span className="material-symbols-outlined">
            mail
          </span>
          </div>
          <div id="email-input"className="email-input">
            <input type="email" placeholder='Enter your email Address' />
          </div>
          <div className="book-demo"><button>Book Demo</button></div>
        </div>
        <div className="features featuresreused ">
          <div className="features-items ">
            <span className="material-symbols-outlined">
              check_circle
            </span><h3>Increase efficiency</h3>
          </div>
          <div className="features-items ">
            <span className="material-symbols-outlined">
              check_circle
            </span><h3>Reduce complexity</h3>
          </div>
          <div className="features-items">
            <span className="material-symbols-outlined">
              check_circle
            </span><h3>Aschive success</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
