import './App.css';
import Navbar from './components/navbar/component.js';
import React from 'react';
import Hero from './components/hero/component.js'
import AboutUs from './components/about-us/component';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import TeamStucture from './components/team-structure/component';
import Chiefs from './components/chiefs/component';
import Footer from './components/footer/component';
import Hostel from './components/hostel/component';
import PopUp from './components/pop-up/component';
import Calendar from './components/calendar/component';
import Notices from './components/notices/component.js';

function App() {
  return (
    <Router>
      <div className="App" id="container">
        <Navbar/>
        <Route path="/hostel/" component={Hostel} />
        <Route exact path='/'>
          <Hero />
          <AboutUs />
          <TeamStucture />
          <Notices />
          <Calendar />
          <Chiefs />
          <PopUp />
        </Route>
        <Footer />
      </div>
    </Router>
  );
}



export default App;
