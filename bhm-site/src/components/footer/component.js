import './component.css';

function Footer() {
    return <div className="footer py-2">
        <div className="container mt-4">
            <div class="row ">
                <div className="col-6 col-md-2 footer_hostels">
                    <ul>
                        <span className="font-weight-bold footer-heading">Hostels</span><br />

                        <li><a href="aravali">Aravali</a></li>
                        <li><a href="girnar">Girnar</a></li>
                        <li><a href="himadri">Himadri</a></li>
                        <li><a href="jwalamukhi">Jwalamukhi</a></li>
                        <li><a href="kailash">Kailash</a></li>
                        <li><a href="karakoram">Karakoram</a></li>
                        <li><a href="kumaon">Kumaon</a></li>
                    </ul>
                </div>
                <div className="col-6 col-md-3 footer_hostels">
                    <ul>
                        <span className="font-weight-bold">&nbsp;</span>
                        <span className="font-weight-bold">&nbsp;</span>
                        <li><a href="nilgiri">Nilgiri</a></li>
                        <li><a href="satpura">Satpura</a></li>
                        <li><a href="shivalik">Shivalik</a></li>
                        <li><a href="udaigiri">Udaigiri</a></li>
                        <li><a href="vindhyachal">Vindhyachal</a></li>
                        <li><a href="zanskar">Zanskar</a></li>
                    </ul>
                </div>
            </div>
            {/* </div>
        <div className="container"> */}
            {/* <div className="">
                <h3 className="font-weight-bold text-center">Contact Us</h3>
                <hr />
            </div> */}
            <div className="container">
                <div className="row">
                    <div className="">
                        <h6 className="text-left mb-2 font-weight-bold">BHM IIT Delhi</h6>
                        <ul className="nav">
                            <li className="nav-item contact-li"><a href="https://www.linkedin.com/company/board-for-hostel-management" className="footer-link"><i className="fa fa-linkedin contact-icon"></i></a></li>
                            <li className="nav-item contact-li"><a href="https://www.instagram.com/bhmiitd/" className="footer-link"><i className="fa fa-instagram contact-icon"></i></a></li>
                            <li className="nav-item contact-li"><a href="https://m.facebook.com/bhm.iitd" className="-link"><i className="fa fa-facebook  contact-icon"></i></a></li>
                        </ul>
                        <br />
                    </div>
                    {/* <div className="col-md-6">
                    <form>
                        <fieldset className="form-group">
                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                        </fieldset>
                        <fieldset className="form-group">
                            <textarea className="form-control" id="exampleMessage" placeholder="Message"></textarea>
                        </fieldset>
                        <fieldset className="form-group text-xs-right">
                            <button type="submit" className="btn btn-secondary-outline btn-lg">Submit</button>
                        </fieldset>
                    </form>
                </div> */}
                </div>
            </div>
            <hr className="m-0" />
            <div className="footer-text pt-2 text-left ">
                <span>Copyright &copy; Board for Hostel Management - IIT Delhi. All rights reserved.</span>
            </div>

        </div>
        {/* <div className="enquire mr-5">
            <a href="#" >Enquire Now</a>
        </div> */}
        {/* <h5 style={{ float: "left" }} className="ml-5">Copyright &#169; 2021 BHM IIT Delhi</h5> */}
    </div>
}

export default Footer;
