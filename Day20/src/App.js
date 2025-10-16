import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import DemoCallBack from './UsePrev';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
       <div className="App">
      {/* <DemoCallBack /> */}
      <Navbar />
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
    </div>
  );
}

export default App;
