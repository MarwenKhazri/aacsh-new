import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../../index.css';
import emailjs from 'emailjs-com';

function Appointment({ show, handleClose }) {

    const [selectedSpeciality, setSelectedSpeciality] = useState('');
    const [selectedLanguages, setSelectedLanguages] = useState([]);

    const doctors = [
        { id: 1, name: 'Dr. Amr Majzoub', image: '/Doctors/Majzoub.jpeg', speciality: 'Anesthesia', languages: ['Arabic', 'English'] },
        { id: 2, name: 'Dr. Atif Fahim Mina', image: '/Doctors/Fahim.jpeg', speciality: 'Anesthesia', languages: ['Arabic', 'English'] },
        { id: 3, name: 'Dr. Noor Sheema Ghazi', image: '/Doctors/Ghazi.jpeg', speciality: 'Anesthesia', languages: ['Arabic', 'English'] },
        { id: 4, name: 'Dr. Salim Taher Sherllalah', image: '/Doctors/Sherllalah.jpeg', speciality: 'Anesthesia', languages: ['English', 'Arabic'] },
        { id: 5, name: 'Dr. Diyaaldeen Mohammed', image: '/Doctors/Diyaaldeen.jpeg', speciality: 'Bariatric Surgery', languages: ['English', 'Arabic'] },
        { id: 6, name: 'Dr. Said Hassan', image: '/Doctors/Hassan.jpeg', speciality: 'Bariatric Surgery', languages: ['English', 'Arabic'] },
        { id: 7, name: 'Dr. Alexander Bader', image: '/Doctors/Bader.jpeg', speciality: 'Cosmetic Gynecology', languages: ['English', 'Arabic'] },
        { id: 8, name: 'Dr. Ayman Helmi', image: '/Doctors/Helmi.jpeg', speciality: 'Cosmetic Surgery', languages: ['Arabic', 'English'] },
        { id: 9, name: 'Dr. Abdulaziz Alrasheed', image: '/Doctors/Alrasheed.jpeg', speciality: 'Cosmetic Surgery', languages: ['Arabic', 'English'] },
        { id: 10, name: 'Dr. Ahmad Alaslawi', image: '/Doctors/Alaslawi.jpeg', speciality: 'Cosmetic Surgery', languages: ['Arabic', 'English'] },
        { id: 11, name: 'Dr. Ibrahim Ashary', image: '/Doctors/Ashary.jpeg', speciality: 'Cosmetic Surgery', languages: ['Arabic', 'English'] },
        { id: 12, name: 'Dr. Khaled Amer', image: '/Doctors/Amer.jpeg', speciality: 'Cosmetic Surgery', languages: ['Arabic', 'English'] },
        { id: 13, name: 'Dr. Mohan Rangaswamy', image: '/Doctors/Rangaswamy.jpeg', speciality: 'Cosmetic Surgery', languages: ['Arabic', 'English'] },
        { id: 14, name: 'Dr. Ahmad Maadarani', image: '/Doctors/Maadarani.jpg', speciality: 'Cosmetic Surgery', languages: ['Arabic', 'English'] },
        { id: 15, name: 'Dr. Jeehan Abdul Qadir', image: '/Doctors/Qadir.jpeg', speciality: 'Dermatology & Antiaging', languages: ['Arabic', 'English'] },
        { id: 16, name: 'Dr. Mine Burcu Hurbas', image: '/Doctors/Hurbas.jpeg', speciality: 'Dermatology & Antiaging', languages: ['Turkish', 'English'] },
        { id: 17, name: 'Dr. Inam Faiq', image: '/Doctors/Faiq.jpeg', speciality: 'Dermatology & Antiaging', languages: ['Arabic', 'English'] },
        { id: 18, name: 'Dr. Marwa Saeed', image: '/Doctors/Saeed.jpeg', speciality: 'Dermatology & Antiaging', languages: ['Arabic', 'English'] },
        { id: 20, name: 'Dr. Dana Moussa', image: '/Doctors/Moussa.jpeg', speciality: 'Dietetics', languages: ['Arabic', 'English'] },
        { id: 21, name: 'Dr. Rita Nawar', image: '/Doctors/Nawar.jpeg', speciality: 'Endocrinology', languages: ['Arabic', 'English'] },
        { id: 22, name: 'Dr. Haddo Abdullah', image: '/Doctors/Abdullah.jpeg', speciality: 'ENT', languages: ['Arabic', 'English'] },
        { id: 23, name: 'Dr. Yasser Abdallah', image: '/Doctors/Abdallah.jpeg', speciality: 'General Medicine', languages: ['Arabic', 'English'] },
        { id: 27, name: 'Dr. Ahmed Almousa', image: '/Doctors/Almousa.jpg', speciality: 'Orthopedics Surgery', languages: ['Arabic', 'English'] },
        { id: 28, name: 'Dr. Nadia Buhannad', image: '/Doctors/Buhannad.jpeg', speciality: 'Psychology', languages: ['Arabic', 'English'] },
    ];

    const specialities = Array.from(new Set(doctors.map((doctor) => doctor.speciality)));

    const filteredDoctors = doctors.filter((doctor) => {
        return (!selectedSpeciality || doctor.speciality === selectedSpeciality) &&
            (selectedLanguages.length === 0 ||
                selectedLanguages.includes('All') ||
                selectedLanguages.some(language => doctor.languages.includes(language)));
    });

    const handleSpecialityChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedSpeciality(selectedValue);
    };

    const handleLanguageChange = (event) => {
        const selectedValues = Array.from(event.target.selectedOptions, option => option.value);
        setSelectedLanguages(selectedValues);
    };

    function sendEmail(e) {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
        //This is important, i'm not sure why, but the email won't send without it

        emailjs.sendForm('service_fwgrqew', 'template_4v62mp8', e.target, 'tKbfD7Qc7HH_s5Z5R')
            .then((result) => {
                window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
            }, (error) => {
                console.log(error.text);
            });

    }

    return (
        <Modal show={show} onHide={handleClose} className='modal-xl'>
            <Modal.Header closeButton>

            </Modal.Header>
            <Modal.Body>
                <section id="appointment" className="appointment section-bg">
                    <div className="container">

                        <div className="section-title">
                            <h2 style={{ color: "#69426f" }}>Make an Appointment</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>

                        <form onSubmit={sendEmail} role="form" className="php-email-form">
                            <div className="row">
                                <div className="col-md-4 form-group">
                                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                    <div className="validate"></div>
                                </div>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                    <div className="validate"></div>
                                </div>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input type="tel" className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                    <div className="validate"></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 form-group mt-3">
                                    <input type="datetime-local" name="date" className="form-control datepicker" id="date" placeholder="Appointment Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                    <div className="validate"></div>
                                </div>
                                <div className="col-md-4 form-group mt-3">
                                    <select name="service" id="department" className="form-select" onChange={handleSpecialityChange} >
                                        {specialities.map((speciality, index) => (
                                            <option key={index} value={speciality}>
                                                {speciality}
                                            </option>
                                        ))}
                                    </select>
                                    <div className="validate"></div>
                                </div>
                                <div className="col-md-4 form-group mt-3">
                                    <select name="doctor" id="doctor" className="form-select">
                                        {filteredDoctors.map((doc, index) => (
                                            <option key={index} value={doc.name}>
                                                {doc.name}
                                            </option>
                                        ))}
                                    </select>
                                    <div className="validate"></div>
                                </div>
                            </div>

                            <div className="form-group mt-3">
                                <textarea className="form-control" name="message" rows="5" placeholder="Message (Optional)"></textarea>
                                <div className="validate"></div>
                            </div>
                            <div className="row">
                                <div class="col-md-4 form-group mt-3">
                                    <input type="radio" name="type" id="flexRadioDefault1" value="Virtual Appointment"/>
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        Virtual Appointment
                                    </label>
                                </div>
                                <div class="col-md-4 form-group mt-3">
                                    <input type="radio" name="type" id="flexRadioDefault2" value="On-Site Appointment" checked />
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        On-Site Appointment
                                    </label>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                            </div>
                            <div className="text-center"><button type="submit">Make an Appointment</button></div>
                        </form>

                    </div>
                </section>
            </Modal.Body>

        </Modal>
    )

}

export default Appointment