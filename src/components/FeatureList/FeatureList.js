import { Container, Row, Col } from 'react-bootstrap'; // Assuming you are using react-bootstrap
import FeatureItem from '../FeatureItem/FeatureItem';
import './FeatureList.css';
import React, { useState, useEffect } from 'react';

function FeatureList({ onComponentChange }) {

    const featuresData = [

 
        {
          imgSrc: 'images/services/Endocrinology.jpg',
          alt: 'Dentistry',
          icon: 'FaFlask',
          title: 'Endocrinology',
        },
        {
          imgSrc: 'images/services/ENT.jpg',
          alt: 'Dentistry',
          icon: 'FaHeadSideCough',
          title: 'ENT',
        },
        {
          imgSrc: 'images/services/dermatology.jpg',
          alt: 'Dentistry',
          icon: 'FaRegSun',
          title: 'Dermatology & Antiaging',
        },
    
        {
          imgSrc: 'images/services/Anesthesia.jpg',
          alt: 'Dentistry',
          icon: 'FaSyringe',
          title: 'Anesthesia',
        },
        {
          imgSrc: 'images/services/Bariatric.jpg',
          alt: 'Dentistry',
          icon: 'FaWeight',
          title: 'Bariatric Surgery',
        },
        {
          imgSrc: 'images/services/gynecology.jpg',
          alt: 'Dentistry',
          icon: 'FaVenus',
          title: 'cosmetic gynecology',
        },
    
        {
          imgSrc: 'images/services/Dietetics.png',
          alt: 'Dietetics',
          icon: 'FaUtensils',
          title: 'Dietetics',
        },
        {
          imgSrc: 'images/services/orthopedics.jpg',
          alt: 'Dentistry',
          icon: 'FaBone',
          title: 'Orthopedics Surgery',
        },
    
        {
          imgSrc: 'images/services/obstetrics_gynaecology.jpg',
          alt: 'Dentistry',
          icon: 'FaFemale',
          title: 'Obstetrics & Gynecology',
        },
    
        {
          imgSrc: 'images/services/physiotherapy.jpg',
          alt: 'Dentistry',
          icon: 'FaRunning',
          title: 'Physiotherapy',
        },
        {
          imgSrc: 'images/services/Psychology.jpg',
          alt: 'Dentistry',
          icon: 'FaYinYang',
          title: 'Psychology',
        },
 

    
    
        // Add more features as needed
      ];

    return (
        <section id="departments" className="departments">
            <div className="container">

                <div className="section-title">
                    <h2 style={{color: '#69426f'}}>Specialities</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>
                <div className="row mb-100">
                        {/* Map through your features data and create FeatureItem components */}
                        {featuresData.map((feature, index) => (
                            <FeatureItem key={index} {...feature} onComponentChange={onComponentChange}/>
                        ))}
                    </div>
            </div>
        </section>


    )
}

export default FeatureList