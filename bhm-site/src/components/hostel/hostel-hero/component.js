import './component.css'
import hero from './hero_original.jpg';
import hostel_logo from '../../../data/hostel/aravali/logo.jpg';
import React, { useEffect } from 'react';

function Hero(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
    return <div>
        <div className="hostel-hero position-relative" >
            <div className="container-fluid full-height">
                <div className="hero-content full-height">
                    <img src={props.hero} alt="" className="img-cover hero-img" />
                </div>
            </div>
            <div className="hero-card p-4 position-absolute text-left d-flex">
                <img src={props.logo} alt="" className="hostel-logo" />
                <div className="hostel-name ml-2 ">{props.hostel} Hostel</div>
                <a href="#" className="insta ml-auto ">
                    <i className="insta fa fa-instagram contact-icon ml-auto" aria-hidden="true"></i>
                </a>
            </div>
        </div>
    </div>
}

export default Hero;