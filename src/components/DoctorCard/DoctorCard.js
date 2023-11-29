import '../../index.css';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';


function DoctorCard(props) {
  const [show, setShow] = useState(false);
  const [selectedDoc, setSelectedOffer] = useState(props);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div>
      <div className="member d-flex align-items-start" onClick={handleShow}>
        <div className="pic"><img src={props.image} className="img-fluid" alt="" /></div>
        <div className="member-info">
          <h4 style={{ color: "#69426f" }}>{props.name}</h4>
          <span>{props.speciality}</span>
          <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
        </div>
      </div>


      <Modal show={show} onHide={handleClose} className='modal-lg'>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <section id="doctors" className="doctors">
            <div className="container">
              <div className='row'>
                <div class="member d-flex align-items-start">
                  <div class="pic"><img src={props.image} class="img-fluid" alt="" /></div>
                  <div class="member-info">
                    <h4 style={{ color: "#69426f" }}>{props.name}</h4>
                    <span>{props.speciality}</span>
                    {props.lang.map((lang) => (
                      <p>{lang}  </p>
                    ))}

                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="about" className="about" style={{ marginTop: "-100px" }}>
            <div className="container-fluid">
              <div className="row">

                <div className="icon-box">
                  <div className="icon"><i className="bx bx-briefcase"></i></div>
                  <h4 className="title"><a style={{ textDecoration: "none" }} href="">Qualification</a></h4>
                  <p className="description">MD, PHD</p>
                </div>

                <div className="icon-box">
                  <div className="icon"><i className="bx bx-fingerprint"></i></div>
                  <h4 className="title"><a style={{ textDecoration: "none" }} >profile</a></h4>
                  <p className="description">Dr Aagje Bais completed her qualifications in the Netherlands, where she graduated from the prestigious Erasmus University of Medicine in Rotterdam. During her studies she specialised in premalignant diseases, oncology and vulva diseases. Dr. Bais has a long documented track record of operational procedures and she is also very competent in the management and follow-up of normal and high-risk pregnancies. </p>
                </div>
              </div>
            </div>
          </section>
        </Modal.Body>

      </Modal>

    </div>
  )
}

export default DoctorCard