function TeamStucture() {
    return <div className="team-structure">
        <div className="container">
            <div className="heading p-5">
                Student Team Structure
            </div>
            <div className="row">
                <div className="col-0 col-md-2 col-lg-2"></div>
                <div className="col-12 col-md-8 col-lg-8 d-none d-md-block">
                    <div className="pb-3">
                        <button type="button" class="btn btn-dark">General Seceratry BHM</button>
                    </div>
                    <div className="row pb-3">
                        <div className="col-6">
                            <button type="button" class="btn btn-success">2 BHM Secretaries</button>
                        </div>
                        <div className="col-6">
                            <button type="button" class="btn btn-success">House Seceratory</button>
                        </div>
                    </div>
                    <div className="row pb-3">
                        <div className="col-6">
                            <button type="button" class="btn btn-light">BHM Repressentatives (1 from each hostel)</button>
                        </div>
                        <div className="col-3">
                            <button type="button" class="btn btn-light">Mess Secratary</button>
                        </div>
                        <div className="col-3">
                            <button type="button" class="btn btn-light">Maintainance Secratary</button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </div>
}

export default TeamStucture;