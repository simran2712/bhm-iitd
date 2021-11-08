import './App.css';
import Navbar from './components/navbar/component.js';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/component';
import Hostel from './components/hostel/component';
import Homepage from './pages/homepage';
import Messmenu from './components/mess menu/component';

function App() {
  return (
    <div className="App" id="container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/hostel/:hostel" element={<Hostel/>} />
          <Route exact path='/' element={<Homepage/>} />
        </Routes>
        <Messmenu/>
        <Footer />
      </Router>
    </div>

  );
}



export default App;
