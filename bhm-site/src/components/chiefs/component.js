import ProfileCard from "../profile-card/component"
import dosa from './../../assets/dosa.jpg';
function Chiefs(){
    return <div className="chiefs">
        <div className="container p-5">
            <div className="heading">
                BHM Chiefs
            </div>
            <div className="row pt-5">
                <div className="col-12 col-md-4">
                    <ProfileCard name="Prof. Aravind Kumar Nema" designation="Dean of Student Affairs" image={dosa}/>
                </div>
                <div className="col-12 col-md-4">
                    <ProfileCard name="Prof. Aravind Kumar Nema" designation="Dean of Student Affairs" image={dosa}/>
                </div>
                <div className="col-12 col-md-4">
                    <ProfileCard name="Prof. Aravind Kumar Nema" designation="Dean of Student Affairs" image={dosa}/>
                </div>
            </div>
        </div>
    </div>
}

export default Chiefs