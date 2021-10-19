import './component.css';
import image from './image.jpg'
import React, {useState} from 'react';


function Close() {
    return  <div className="pointer d-flex ml-auto">
            <div data-dismiss="modal" className="close-button ml-auto p-auto">
                <div className="m-auto">&#10006;</div>
            </div>

        </div>
}

function PopUp() {
    const [loaded, setLoaded] = useState(false);
    return <div className="popup">
        <div class="modal" tabindex="-1" role="dialog" id="myModal">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content p-4 ">
                    <div className="row">
                        <div className={"col-12 col-md-12 "/*+"d-md-none"*/}>
                            <div className="d-flex">
                                <div className="font-weight-bold">This is a Sample Notification Heading</div>
                                <Close />

                            </div>
                            <div className="text-left mt-3 modal-text">This is a Sample Notification Body. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam diam quam, congue ut fringilla sit amet, fermentum ac sapien. Sed rutrum sem nec arcu auctor dignissim. Donec imperdiet quam sit amet odio pharetra, a imperdiet erat interdum. Ut sit amet orci dui. Nullam pretium nunc eget magna finibus, vel scelerisque dolor pretium. In hac habitasse platea dictumst. Proin porttitor et nunc sit amet sagittis. Proin suscipit lacinia lectus non consectetur. Phasellus varius urna nisi, ut condimentum mauris tincidunt id. Quisque at ornare ipsum.</div>
                        </div>
                        {/* <div className="col-12 col-md-6">
                            <img src={image} alt="" className="cover full-width full-height popup-image" />
                        </div> */}
                        {/* <div className="col-12 col-md-6 d-none d-lg-block">
                            <Close />
                        </div> */}
                    </div>



                </div>
            </div>
        </div>
    </div>
}

export default PopUp