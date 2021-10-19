import './App.css';
import Navbar from './components/navbar/component.js' 
import Hero from './components/hero/component.js' 
import AboutUs from './components/about-us/component';
import TeamStucture from './components/team-structure/component';
import Chiefs from './components/chiefs/component';
import Footer from './components/footer/component';
import PopUp from './components/pop-up/component';
import Calendar from './components/calendar/component';
import Notices from './components/notices/component.js';
function App() {
  return (
    <div className="App" id="container">
        <Navbar/>
        <Hero/>
        <AboutUs/>
        <TeamStucture/>
        <Notices/>
        <Calendar/>
        <Chiefs/>
        <Footer/>
        <PopUp/>
    </div>
  );
}



export default App;
