import '../../index.css';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Appointment from '../Appointment/Appointment';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
const logo = process.env.PUBLIC_URL + '/logo.png';
function NavBar({ onComponentChange }) {


    const [showAppointment, setShowAppointment] = useState(false);

    const handleCloseAppointment = () => setShowAppointment(false);
    const handleShowAppointment = () => setShowAppointment(true);

    const [activeNavItem, setActiveNavItem] = useState('home');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleNavItemClick = (item) => {
        setActiveNavItem(item);
        onComponentChange(item, '');
    };




    return (
        <div >
            <Appointment show={showAppointment} handleClose={handleCloseAppointment}/>
            <div id="topbar" className="d-flex align-items-center fixed-top">
                <div className="container d-flex justify-content-between">
                    <div className="contact-info d-flex align-items-center">
                        <i style={{ color: "#69426f" }} className="bi bi-envelope"></i> <a href="mailto:info@aacsh.com">info@aacsh.com</a>
                        <i style={{ color: "#69426f" }} className="bi bi-phone"></i> <a href="tel:6177787312">+971 55 3562018</a>
                    </div>
                    <div className="d-none d-lg-flex social-links align-items-center">
                        <a href="https://twitter.com/AACSHospital" className="twitter"><i style={{ color: "#69426f" }} className="bi bi-twitter-x"></i></a>
                        <a href="https://www.facebook.com/AACSHospital/" className="facebook"><i style={{ color: "#69426f" }} className="bi bi-facebook"></i></a>
                        <a href="https://www.instagram.com/aacshospital/" className="instagram"><i style={{ color: "#69426f" }} className="bi bi-instagram"></i></a>
                        <a href="https://www.linkedin.com/company/american-academy-of-cosmetic-surgery-hospital" className="linkedin"><i style={{ color: "#69426f" }} className="bi bi-linkedin"></i></a>
                        <a href="https://www.tiktok.com/@aacsh.hospital" className="linkedin"><i style={{ color: "#69426f" }} className="bi bi-tiktok"></i></a>

                    </div>
                </div>
            </div>

            {/* ======= Header ======= */}
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">

                    <a href='#' onClick={() => handleNavItemClick('home')} className="logo me-auto"><img className="img-fluid" src={logo} style={{ width: "250px", height: "100%", objectFit: "cover" }} /></a>
                    {/* Uncomment below if you prefer to use an image logo */}
                    {/* <a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"></a> */}

                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li><a style={{ color: activeNavItem === 'home' ? "#69426f" : "" }}
                                href="#"
                                className={`nav-link scrollto ${activeNavItem === 'home' ? 'active' : ''}`}
                                onClick={() => handleNavItemClick('home')}>Home</a></li>
                            <li>                        <a style={{ color: activeNavItem === 'about' ? "#69426f" : "" }} className={`nav-link scrollto ${activeNavItem === 'about' ? 'active' : ''}`} href="#about" onClick={() => handleNavItemClick('about')}>About</a></li>
                            <li><a style={{ color: activeNavItem === 'specialities' ? "#69426f" : "" }}
                                href="#"
                                className={`nav-link scrollto ${activeNavItem === 'specialities' ? 'active' : ''}`}
                                onClick={() => handleNavItemClick('specialities')}>Specialities</a></li>
                            <li><a style={{ color: activeNavItem === 'offers' ? "#69426f" : "" }}
                                href="#"
                                className={`nav-link scrollto ${activeNavItem === 'offers' ? 'active' : ''}`}
                                onClick={() => handleNavItemClick('offers')}>Offers</a></li>
                            <li><a style={{ color: activeNavItem === 'doctors' ? "#69426f" : "" }}
                                href="#"
                                className={`nav-link scrollto ${activeNavItem === 'doctors' ? 'active' : ''}`}
                                onClick={() => handleNavItemClick('doctors')}>Doctors</a></li>
                            <li className="dropdown"><a style={{ textDecoration: "none" }} href="#"><span>Other</span> <i className="bi bi-chevron-down"></i></a>
                                <ul>
                                    <li><a style={{ color: activeNavItem === 'careers' ? "#69426f" : "" }}
                                        href="#"
                                        className={`nav-link scrollto ${activeNavItem === 'careers' ? 'active' : ''}`}
                                        onClick={() => handleNavItemClick('careers')}>Careers</a></li>
                                    <li><a style={{ color: activeNavItem === 'privacy' ? "#69426f" : "" }}
                                        href="#"
                                        className={`nav-link scrollto ${activeNavItem === 'privacy' ? 'active' : ''}`}
                                        onClick={() => handleNavItemClick('privacy')}>Privacy Policy</a></li>
                                    <li><a style={{ color: activeNavItem === 'insurances' ? "#69426f" : "" }}
                                        href="#"
                                        className={`nav-link scrollto ${activeNavItem === 'insurances' ? 'active' : ''}`}
                                        onClick={() => handleNavItemClick('insurances')}>Insurances</a></li>
                                </ul>
                            </li>
                            <li><a style={{ color: activeNavItem === 'contact' ? "#69426f" : "" }}
                                href="#"
                                className={`nav-link scrollto ${activeNavItem === 'contact' ? 'active' : ''}`}
                                onClick={() => handleNavItemClick('contact')}>Contact</a></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle" onClick={handleShow}></i>
                    </nav>{/* .navbar */}

                    <a onClick={handleShowAppointment} style={{ textDecoration: "none" }} href="#appointment" className="appointment-btn scrollto"><span className="d-none d-md-inline" >Make an</span> Appointment</a>

                </div>
            </header>{/* End Header */}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <ListGroup >
                        <ListGroup.Item action >
                            <a style={{ color: activeNavItem === 'home' ? "#69426f" : "" }}
                                href="#"
                                className={`nav-link scrollto ${activeNavItem === 'home' ? 'active' : ''}`}
                                onClick={() => handleNavItemClick('home')}>Home</a>
                        </ListGroup.Item>
                        <ListGroup.Item action >
                            <a style={{ color: activeNavItem === 'about' ? "#69426f" : "" }} className={`nav-link scrollto ${activeNavItem === 'about' ? 'active' : ''}`} href="#about" onClick={() => handleNavItemClick('about')}>About</a>
                        </ListGroup.Item>
                        <ListGroup.Item action >
                            <a style={{ color: activeNavItem === 'doctors' ? "#69426f" : "" }}
                                href="#"
                                className={`nav-link scrollto ${activeNavItem === 'doctors' ? 'active' : ''}`}
                                onClick={() => handleNavItemClick('doctors')}>Doctors</a>                        </ListGroup.Item>
                        <ListGroup.Item action >
                            <a style={{ color: activeNavItem === 'contact' ? "#69426f" : "" }}
                                href="#"
                                className={`nav-link scrollto ${activeNavItem === 'contact' ? 'active' : ''}`}
                                onClick={() => handleNavItemClick('contact')}>Contact</a>
                        </ListGroup.Item>

                        <ListGroup.Item action >
                            <a style={{ color: activeNavItem === 'specialities' ? "#69426f" : "" }}
                                href="#"
                                className={`nav-link scrollto ${activeNavItem === 'specialities' ? 'active' : ''}`}
                                onClick={() => handleNavItemClick('specialities')}>Specialities</a>
                        </ListGroup.Item>
                        <ListGroup.Item action >
                            <a style={{ color: activeNavItem === 'careers' ? "#69426f" : "" }}
                                href="#"
                                className={`nav-link scrollto ${activeNavItem === 'careers' ? 'active' : ''}`}
                                onClick={() => handleNavItemClick('careers')}>Careers</a>
                        </ListGroup.Item>
                        <ListGroup.Item action >
                            <a style={{ color: activeNavItem === 'careers' ? "#69426f" : "" }}
                                href="#"
                                className={`nav-link scrollto ${activeNavItem === 'privacy' ? 'active' : ''}`}
                                onClick={() => handleNavItemClick('privacy')}>Privacy Policy</a>
                        </ListGroup.Item>
                        <ListGroup.Item action >
                            <a style={{ color: activeNavItem === 'careers' ? "#69426f" : "" }}
                                href="#"
                                className={`nav-link scrollto ${activeNavItem === 'insurances' ? 'active' : ''}`}
                                onClick={() => handleNavItemClick('insurances')}>Insurances</a>
                        </ListGroup.Item>
                    </ListGroup>


                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
        </div>
    )

}

export default NavBar;