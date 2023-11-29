import '../../index.css';


function Counter() {
    return (
        <section id="counts" className="counts">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="count-box">
                            <i className="fas fa-user-md"></i>
                            <h2 >50</h2>
                            <p>Doctors</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                        <div className="count-box">
                            <i className="far fa-hospital"></i>
                            <h2 >50</h2>       
                            <p>Departments</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                        <div className="count-box">
                            <i className="fas fa-flask"></i>
                            <h2 >50</h2>
                            <p>Research Labs</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                        <div className="count-box">
                            <i className="fas fa-award"></i>
                            <h2 >50</h2>
                            <p>Awards</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Counter