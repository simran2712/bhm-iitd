import './component.css';
import bhm_logo from './bhm.png';
import search_logo from './search.png';
import menu from './menu.png';

function Navbar() {

    /*function display_nav(){
        if(document.querySelector(".navbar").style.height=="60px"){
            document.querySelector(".navbar").style.height="250px";
            document.querySelector(".navbar-middle").style.display="block";
        }
        else{
            document.querySelector(".navbar").style.height="60px";
            document.querySelector(".navbar-middle").style.display="none";
        }
    }*/

    return <nav class="sticky-top">
        <ul className="navbar sticky-top ">
            <li className="navbar-button" /*onClick={display_nav()}*/><img src={menu} alt="" className="menu_icon" /></li>
            <li>
                {/* <img src={bhm_logo} alt="" className="navbar_bhm" /> */}
                <a href="" className="navbar-brand">BHM - IIT Delhi</a></li>
            <li><ul className="navbar-middle">
                <li className="navbar-options">Hostel
                    <ul className="navbar-suboptions">
                        <li>Aravali Hostel</li>
                        <li>Girnar Hostel</li>
                        <li>Jwalamukhi Hostel</li>
                        <li>Karakoram Hostel</li>
                        <li>Nilgiri Hostel</li>
                        <li>Shivalik Hostel</li>
                        <li>Satpura Hostel</li>
                        <li>Udaigiri Hostel</li>
                        <li>Vindhyachal Hostel</li>
                        <li>Zanskar Hostel</li>
                        <li>Kailash Hostel</li>
                        <li>Himadri Hostel</li>
                        <li>New Kailash Hostel</li>
                    </ul>
                </li>
                <li className="navbar-options">Resources</li>
                <li className="navbar-options">Notices</li>
                <li className="navbar-options">FAQs</li>
                <li className="navbar-options">About Us</li>
                <li className="navbar-options">Important links</li>
                <li className="navbar-options">Initiatives</li>
            </ul></li>
            <li className="search"><img src={search_logo} alt="" className="search-sym" /><input className="searchbox" type="text" placeholder="Search.."></input></li>
        </ul>
    </nav>
}

export default Navbar
