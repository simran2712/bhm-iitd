import './component.css';

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function Hostel(props) {
  const hostelName = props.location.pathname.split("hostel/")[1];
  return <div>
    <div className="my-3">&nbsp;</div>
    <div className="container">
      {capitalize(hostelName)} Hostel Page
    </div>
  </div>
}

export default Hostel