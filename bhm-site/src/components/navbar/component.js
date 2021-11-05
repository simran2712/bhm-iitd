import './component.css';
import {Link} from "react-router-dom";

function Navbar(){
    return <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container-fluid">
    <Link class="navbar-brand" to="/bhm-site">BHM - IIT Delhi</Link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav navbar-nav-scroll mx-auto">
      <li class="nav-item">
        <Link class="nav-link" to="/bhm-site">Home</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link" to="/about-us">About Us</Link>
        </li>
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="/hostel" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Hostel
          </Link>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link className="dropdown-item" to="/hostel/aravali">Aravali Hostel</Link>
            <Link className="dropdown-item" to="/hostel/girnar">Girnar Hostel</Link>
            <Link className="dropdown-item" to="/hostel/jwalamukhi">Jwalamukhi Hostel</Link>
            <Link className="dropdown-item" to="/hostel/karakoram">Karakoram Hostel</Link>
            <Link className="dropdown-item" to="/hostel/nilgiri">Nilgiri Hostel</Link>
            <Link className="dropdown-item" to="/hostel/shivalik">Shivalik Hostel</Link>
            <Link className="dropdown-item" to="/hostel/satpura">Satpura Hostel</Link>
            <Link className="dropdown-item" to="/hostel/udaigiri">Udaigiri Hostel</Link>
            <Link className="dropdown-item" to="/hostel/vindhyachal">Vindhyachal Hostel</Link>
            <Link className="dropdown-item" to="/hostel/zanskar">Zanskar Hostel</Link>
            <div class="dropdown-divider"></div>
            <Link className="dropdown-item" to="/hostel/kailash">Kailash Hostel</Link>
            <Link className="dropdown-item" to="/hostel/himadri">Himadri Hostel</Link>
            <Link className="dropdown-item" to="/hostel/newkailash">New Kailash Hostel</Link>
          </div>
        </li>
        
        <li class="nav-item">
        <Link class="nav-link" to="/notices">Notices</Link>
        </li>

        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="/resources" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Resources
          </Link>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link className="dropdown-item" to="/resources">Resource 1</Link>
            <Link className="dropdown-item" to="/resources">Resource 2</Link>
            <Link className="dropdown-item" to="/resources">Resource 3</Link>
            <Link className="dropdown-item" to="/resources">Resource 4</Link>
            <Link className="dropdown-item" to="/resources">Resource 5</Link>
            <Link className="dropdown-item" to="/resources">Resource 6</Link>
            <Link className="dropdown-item" to="/resources">Resource 7</Link>
          </div>
        </li>


        <li class="nav-item">
        <Link class="nav-link" to="/FAQs">FAQs</Link>
        </li>

        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="/important-links" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Important Links
          </Link>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link className="dropdown-item" to="/important-links">Link 1</Link>
            <Link className="dropdown-item" to="/important-links">Link 2</Link>
            <Link className="dropdown-item" to="/important-links">Link 3</Link>
            <Link className="dropdown-item" to="/important-links">Link 4</Link>
            <Link className="dropdown-item" to="/important-links">Link 5</Link>
          </div>
        </li>

        <li class="nav-item">
        <Link class="nav-link" to="/initiatives">Initiatives</Link>
        </li>
      </ul>
      <form class="d-inline-flex">
        <button class="btn btn-outline" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16" color="rgb(100,100,100)">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></button>
      <input class="form-control" type="Search" placeholder="Search" aria-label="Search"></input>
      </form>
      </div>
      </div>
  </nav> 
}

export default Navbar 

