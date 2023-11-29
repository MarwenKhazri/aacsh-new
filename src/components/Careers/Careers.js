import '../../index.css';


function Careers() {

    return (
        <section id="contact" className="contact" style={{ marginTop: "100px" }}>
            <div className="container">

                <div className="section-title">
                    <h2 style={{ color: "#69426f" }}>Careers</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>
            </div>



            <div className="container">
                <div className="row mt-5">



                    <div className="col-lg-12 mt-5 mt-lg-0">

                        <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                </div>
                                <div className="col-md-6 form-group mt-3 mt-md-0">
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <label for="exampleFormControlFile1">Attach your CV: </label><br></br>
                                <input type="file" class="form-control-file" id="exampleFormControlFile1" />
                            </div>
                            
                            <div className="my-3">
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">Your message has been sent. Thank you!</div>
                            </div>
                            <div className="text-center"><button type="submit">Send Message</button></div>
                        </form>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default Careers;