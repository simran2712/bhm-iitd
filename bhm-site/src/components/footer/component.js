import './component.css';

function Footer() {
    return <div className="footer">
        <div className="container mt-4">
            <h4 className="font-weight-bold text-center">Hostels</h4>
            <div class="row ">
                <div className="col-6 footer_hostels">
                    <ul>
                        <li><a href="">Aravali</a></li>
                        <li><a href="">Girnar</a></li>
                        <li><a href="">Himadri</a></li>
                        <li><a href="">Jwalamukhi</a></li>
                        <li><a href="">Kailash</a></li>
                        <li><a href="">Karakoram</a></li>
                        <li><a href="">Kumaon</a></li>
                    </ul>
                </div>
                <div className="col-6 footer_hostels">
                    <ul>
                        <li><a href="">Nilgiri</a></li>
                        <li><a href="">Satpura</a></li>
                        <li><a href="">Shivalik</a></li>
                        <li><a href="">Udaigiri</a></li>
                        <li><a href="">Vindhyachal</a></li>
                        <li><a href="">Zanskar</a></li>
                    </ul>
                </div>
            </div>
            {/* </div>
        <div className="container"> */}
            <div className="">
                <h3 className="font-weight-bold text-center">Contact Us</h3>
                <hr />
            </div>
            <div className="row">
                <div className="">
                    <h4 className="text-left mb-2 font-weight-bold">BHM IIT Delhi</h4>
                    <ul className="nav">
                        <li className="nav-item contact-li"><a href="https://www.linkedin.com/company/board-for-hostel-management" className="nav-link"><i className="fa fa-linkedin fa-lg contact-icon"></i></a></li>
                        <li className="nav-item contact-li"><a href="https://www.instagram.com/bhmiitd/" className="nav-link"><i className="fa fa-instagram fa-lg contact-icon"></i></a></li>
                        <li className="nav-item contact-li"><a href="https://m.facebook.com/bhm.iitd" className="nav-link"><i className="fa fa-facebook fa-lg contact-icon"></i></a></li>
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
        <div className="enquire mr-5">
            <a href="#" >Enquire Now</a>
        </div>
        <h5 style={{ float: "left" }} className="ml-5">Copyright &#169; 2021 BHM IIT Delhi</h5>
    </div>
}

export default Footer;
