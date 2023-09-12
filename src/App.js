import Navbar from './componenets/Navbar';
import Footer from './componenets/Footer';
import './App.css';
import Home from './componenets/Home';
import Products from './componenets/Products';
import Contact from './componenets/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Query from './componenets/Query';
import Login from  "./componenets/Navsignin";

function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />}/>
        </Routes>
        <Query/>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
