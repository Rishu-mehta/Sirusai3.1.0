import { Link } from "react-router-dom";
import logo from '../Resource/logo.jpg';
import { useState } from "react";

export default function Navbar() {
  const [hamburger, setHamburger] = useState(false);
  const handleHamburger = () => {
    setHamburger(!hamburger);
  }
  return (
    <div className='navigation'>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
          <h1>Sirus AI</h1>
        </div>
        <div id="links-resorces"
          className={hamburger ? "mobile-links-resorces" : "links-resorces"}>
          <div className="links">
            <ul>
              <li><Link className="link" to="/">Home</Link></li>
              <li><Link className="link" to="/products">Products</Link></li>
              <li><Link className="link" to="/contact">Contact us</Link></li>
            </ul>
          </div>
          <div className="resources">
            {/* <div id="mode"><span className="material-symbols-rounded">
              dark_mode</span>
            </div> */}
            <div id="login"><Link to="/login"><button>Login</button></Link></div>
            <div id="book-demo"><button>Book Demo</button></div>

          </div>
        </div>
        <div className="burgers" onClick={handleHamburger} >
          <div id="ham-burger">{hamburger?<span class="material-symbols-outlined">
              close
            </span>:<span className="material-symbols-rounded">menu</span>
            }</div>
        </div>
      </div>
    </div>

  )
}
