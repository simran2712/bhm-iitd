import './component.css';
function ProfileCard(props){
    return <div className="profile-card">
        <div className="profile-image">
            <img src={props.image} alt="" className='img-cover profile-image'/>
        </div>
        <div className="profile-name font-weight-bold pt-3">{props.name}</div>
        <div className="profile-designation">{props.designation}</div>
    </div>
}

export default ProfileCard;