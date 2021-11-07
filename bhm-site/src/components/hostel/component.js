import './component.css';
<<<<<<< Updated upstream
function Hostel(){
    return <div class="event-container">
    <div className="heading">Hostel page</div>
      Demo hostel page
    </div>
=======
import {useParams} from 'react-router-dom';
import Introduction from '../hostel-page-introduction/component';
import Vision from '../hostel-page-vision/component';
import ContactUs from '../hostel-page-contact-us/component';

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function Hostel(props) {
  const {hostel} = useParams();
  return <div>
    <div className="my-3">&nbsp;</div>
    <div className="container">
      {capitalize(hostel)} Hostel Page
    </div>
    <Introduction/>
    <Vision/>
    <ContactUs/>
  </div>
>>>>>>> Stashed changes
}

export default Hostel