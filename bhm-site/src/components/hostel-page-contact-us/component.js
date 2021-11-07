import './component.css'
function ContactUs(){
    return <div className="contact-us">
        <div className="container py-5 ">
            <div className="heading pb-5">
            <i class="fas fa-phone-alt" style={{fontSize:"28px",marginRight:"20px",color:"black"}}></i>Contact Us
            </div>
            <div className="row pt-">
                <div className="col-12 col-md-4">
                    <div class="h4" style={{fontWeight:"bold"}}>Caretaker</div>
                    <div class="h5" style={{fontWeight:"bold"}}>John Doe</div>
                    <div class="h6" style={{paddingBottom:"0px",marginBottom:"0px"}}>9876543210</div>
                    <div class="h6" style={{paddingTop:"0px",marginTop:"0px"}}>caretaker@iitd.ac.in</div>
                </div>
                <div className="col-12 col-md-4">
                    <div class="h4" style={{fontWeight:"bold"}}>Caretaker</div>
                    <div class="h5" style={{fontWeight:"bold"}}>John Doe</div>
                    <div class="h6" style={{paddingBottom:"0px",marginBottom:"0px"}}>9876543210</div>
                    <div class="h6" style={{paddingTop:"0px",marginTop:"0px"}}>caretaker@iitd.ac.in</div>
                </div>
                <div className="col-12 col-md-4" style={{paddingBottom:"0px"}}>
                    <div class="h4" style={{fontWeight:"bold"}}>Caretaker</div>
                    <div class="h5" style={{fontWeight:"bold"}}>John Doe</div>
                    <div class="h6" style={{paddingBottom:"0px",marginBottom:"0px"}}>9876543210</div>
                    <div class="h6" style={{paddingTop:"0px",marginTop:"0px"}}>caretaker@iitd.ac.in</div>
                </div>  
            </div>
        </div>
    </div>
}

export default ContactUs