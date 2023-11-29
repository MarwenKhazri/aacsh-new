import '../../index.css';


function Contact()
{

  const goToGoogleMaps = () => {
    // Replace the latitude and longitude values with the desired location
    const latitude = 25.2326705;
    const longitude = 55.3195453;

    // Open Google Maps in a new tab with the specified location
    window.open(`https://maps.app.goo.gl/e73ksmiRFsDr64Aw5`);
  };
    return(
        <section id="contact" className="contact" style={{marginTop: "100px"}}>
        <div className="container">
  
          <div className="section-title">
            <h2 style={{ color: "#69426f" }}>Contact</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>
        </div>
  
        <div>
          <iframe style={{ border: '0', width: '100%', height: '350px' }} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14436.505220360608!2d55.3195453!3d25.2326705!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d3426a43219%3A0x182acbe5d859f0b!2sAmerican%20Academy%20of%20Cosmetic%20Surgery%20Hospital!5e0!3m2!1sen!2sae!4v1700988200023!5m2!1sen!2sae" frameBorder="0" allowFullScreen title="Google Map"></iframe>
        </div>
  
        <div className="container">
          <div className="row mt-5">
  
            <div className="col-lg-4">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p><a href="#" style={{textDecoration: "none"}} onClick={goToGoogleMaps}>Building 73 - Umm Hurair 2 - Dubai Healthcare City - Dubai - United Arab Emirates</a></p>
                </div>
  
                <div className="email">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p><a href="mailto:contact@example.com" style={{textDecoration: "none"}}>info@aacsh.com</a></p>
                </div>
  
                <div className="phone" >
                  <i className="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p><a style={{textDecoration: "none"}} href="tel:6177787312">+971 442 37600 +971 55 3562018</a></p>
                </div>
  
              </div>
  
            </div>
  
            <div className="col-lg-8 mt-5 mt-lg-0">
  
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
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                </div>
                <div className="form-group mt-3">
                  <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
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
export default Contact