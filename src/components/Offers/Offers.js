import '../../index.css';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Appointment from '../Appointment/Appointment';

const logo = process.env.PUBLIC_URL + '/aacshPics/8.jpeg';


function Offers() {

  const offers = [
    {
      id: 1, title: 'red carpet', image: '/aacshPics/8.jpeg', description: 'During a Red Carpet facial, special hydradermabrasion fluids exfoliate', price: '2500'

    },
    {
      id: 2, title: 'Mommy makeover', image: '/aacshPics/8.jpeg', description: 'During a Red Carpet facial, special hydradermabrasion fluids exfoliate', price: '9500'
    },
    {
      id: 3, title: 'red carpet', image: '/aacshPics/8.jpeg', description: 'During a Red Carpet facial, special hydradermabrasion fluids exfoliate', price: '7500'
    }


  ]

  const [showAppointment, setShowAppointment] = useState(false);

  const handleCloseAppointment = () => setShowAppointment(false);
  const handleShowAppointment = () => setShowAppointment(true);

  const [show, setShow] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState(null);

  const handleClose = () => setShow(false);

  const openModal = (o) => {
    setSelectedOffer(o);
    setShow(true);
  };

  return (
    <div>
      <Appointment show={showAppointment} handleClose={handleCloseAppointment}/>
      <section id="services" className="services" style={{ marginTop: "100px" }}>
        <div className="container">

          <div className="section-title" >
            <h2 style={{ color: "#69426f" }}>Offers</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>

          <div className="row">
            {offers.map((o) => (
              <div key={o.id} className="col-lg-4 col-md-6 d-flex align-items-stretch" onClick={() => openModal(o)}>
                <div className="icon-box">
                  <img className="img-fluid" src={logo} style={{ width: "100%", height: "100%", objectFit: "cover", marginTop: "-40px", marginBottom: "10px" }} />
                  <h4><a href="" style={{ textDecoration: "none" }}>{o.title}</a></h4>
                  <h5>{o.price} DHS</h5>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
      {selectedOffer && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>

            <div style={{ textAlign: "center" }}>
              <h5 style={{ fontFamily: "Raleway, sans-serif", color: "#69426f" }}>{selectedOffer.title}</h5>
              <h6>{selectedOffer.description}</h6>
            </div>

          </Modal.Body>
          <Modal.Footer>

            <div className='me-auto'><h6>price: {selectedOffer.price}</h6></div>
            <div style={{ float: "left" }}><a style={{ textDecoration: "none" }} onClick={handleShowAppointment} href='#' className="appointment-btn scrollto"><span className="d-none d-md-inline">Make an</span> Appointment</a></div>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  )
}

export default Offers