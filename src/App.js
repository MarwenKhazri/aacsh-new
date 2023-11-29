import './index.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import DoctorPage from './components/DoctorPage/DoctorPage';
import React, { useState } from 'react';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import Specialities from './components/Specialities/Specialities';
import Careers from './components/Careers/Careers';
import Offers from './components/Offers/Offers';
import Privacy from './components/Privacy/Privacy';
import Insurances from './components/Insurances/Insurances';
import FloatingContact from './components/FloatingContact/FloatingContact';
function App() {

  const [activeComponent, setActiveComponent] = useState('home');
  const [speciality, setActiveSpeciality] = useState('');
  const [doctor, setActivedoctor] = useState('');
  const [reloadKey, setReloadKey] = useState('');

  const handleComponentChange = (component, speciality, doctor) => {
  
    console.log(component)
    setActiveComponent(component);
    setActiveSpeciality(speciality)
    setActivedoctor(doctor)
  };


  return (
    <div>
      <NavBar onComponentChange={handleComponentChange} />
      {activeComponent === 'home' && <Home onComponentChange={handleComponentChange} />}
      {activeComponent === 'doctors' && <DoctorPage onComponentChange={handleComponentChange} />}
      {activeComponent === 'about' && <AboutUs onComponentChange={handleComponentChange} />}
      {activeComponent === 'contact' && <Contact onComponentChange={handleComponentChange} />}
      {activeComponent === 'specialities' && <Specialities onComponentChange={handleComponentChange} />}
      {activeComponent === 'careers' && <Careers onComponentChange={handleComponentChange} />}
      {activeComponent === 'offers' && <Offers onComponentChange={handleComponentChange} />}
      {activeComponent === 'privacy' && <Privacy onComponentChange={handleComponentChange} />}
      {activeComponent === 'insurances' && <Insurances onComponentChange={handleComponentChange} />}




         
      <Footer onComponentChange={handleComponentChange}/>

      <div style={{ float: "right" }}>
        <FloatingContact />
      </div>
      </div>
    
  );
}

export default App;
