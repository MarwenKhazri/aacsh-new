import '../../index.css';
const logo = process.env.PUBLIC_URL + '/logo.png';


function Footer({ onComponentChange }) {


  return (
    <footer id="footer">

      <div className="footer-top">
        <div className="container">
          <div className="row">

            <div className="col-lg-3 col-md-6 footer-contact">
              <h3><img className="img-fluid" src={logo} style={{ width: "250px", height: "100%", objectFit: "cover" }} /></h3>
              <p>
                Building 73 <br />
                Umm Hurair 2, Dubai Healthcare City, Dubai<br />
                United Arab Emirates <br /><br />
                <strong>Phone:</strong> +971 55 3562018<br />
                <strong>Email:</strong> info@aacsh.com<br />
              </p>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><i style={{ color: '#69426f' }} className="bx bx-chevron-right"></i> <a style={{ textDecoration: "none" }} onClick={() => onComponentChange('home')} href="#">Home</a></li>
                <li><i style={{ color: '#69426f' }} className="bx bx-chevron-right"></i> <a style={{ textDecoration: "none" }} onClick={() => onComponentChange('about')} href="#">About us</a></li>
                <li><i style={{ color: '#69426f' }} className="bx bx-chevron-right"></i> <a style={{ textDecoration: "none" }} onClick={() => onComponentChange('specialities')} href="#">Specialities</a></li>
                <li><i style={{ color: '#69426f' }} className="bx bx-chevron-right"></i> <a style={{ textDecoration: "none" }} onClick={() => onComponentChange('doctors')} href="#">Doctors</a></li>
                <li><i style={{ color: '#69426f' }} className="bx bx-chevron-right"></i> <a style={{ textDecoration: "none" }} onClick={() => onComponentChange('careers')} href="#">Careers</a></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4></h4>
              <ul>
                
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>Join Our Newsletter</h4>
              <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
              <form action="" method="post">
                <input style={{ border: "red" }} type="email" name="email" /><input type="submit" style={{ backgroundColor: '#69426f' }} value="Subscribe" />
              </form>
            </div>

          </div>
        </div>
      </div>

      <div className="container d-md-flex py-4">

        <div className="me-md-auto text-center text-md-start">
          <div className="copyright">
            &copy; Copyright <strong><span>AACSH</span></strong>. All Rights Reserved
          </div>
         
        </div>
        <div className="social-links text-center text-md-right pt-3 pt-md-0">
          <a href="https://twitter.com/AACSHospital" style={{ backgroundColor: '#69426f' }} className="twitter"><i className="bx bi-twitter-x"></i></a>
          <a href="https://www.facebook.com/AACSHospital/" style={{ backgroundColor: '#69426f' }} className="facebook"><i className="bx bxl-facebook"></i></a>
          <a href="https://www.instagram.com/aacshospital/" style={{ backgroundColor: '#69426f' }} className="instagram"><i className="bx bxl-instagram"></i></a>
          <a href="https://www.linkedin.com/company/american-academy-of-cosmetic-surgery-hospital" style={{ backgroundColor: '#69426f' }} className="linkedin"><i className="bx bxl-linkedin"></i></a>
          <a href="https://www.tiktok.com/@aacsh.hospital" style={{ backgroundColor: '#69426f' }} className="linkedin"><i className="bx bxl-tiktok"></i></a>

        </div>
      </div>
    </footer>
  )
}

export default Footer