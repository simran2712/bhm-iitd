import './App.css';
import Navbar from './components/navbar/component.js';
import React from 'react';
import Hero from './components/hero/component.js' 
import AboutUs from './components/about-us/component';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
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
        <Route path="/aravali" component={Hostel}/>
        <Route path="/girnar" component={Hostel}/>
        <Route path="/jwalamukhi" component={Hostel}/>
        <Route path="/karakoram" component={Hostel}/>
        <Route path="/nilgiri" component={Hostel}/>
        <Route path="/shivalik" component={Hostel}/>
        <Route path="/satpura" component={Hostel}/>
        <Route path="/udaigiri" component={Hostel}/>
        <Route path="/vindhyachal" component={Hostel}/>
        <Route path="/zanskar" component={Hostel}/>
        <Route path="/kailash" component={Hostel}/>
        <Route path="/himadri" component={Hostel}/>
        <Route path="/newkailash" component={Hostel}/>
        <Hero/>
        <AboutUs/>
        <TeamStucture/>
        <Notices/>
        <Calendar/>
        <Chiefs/>
        <Footer/>
        <PopUp/>
    </div>
    </Router>
  );
}



export default App;
