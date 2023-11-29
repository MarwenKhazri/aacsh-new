// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FaBeer } from 'react-icons/fa';
import React from 'react';
import * as icons from "react-icons/fa";
import './FeatureItem.css';




const FeatureItem = ({ imgSrc, alt, icon, title, onComponentChange  }) => {

  const Icon = icon ? icons[icon] : null;
    return (
      <div className="col-sm-6 col-md-6 col-lg-3" onClick={() => onComponentChange('specialities', title)}>
        <div className="feature-item">
          <div className="feature__img" >
            <img src={imgSrc} alt={alt} loading="lazy" style={{width: "300px"}}/>
          </div>
          <div className="feature__content">
            <div className="feature__icon">
            <Icon />
            </div>
            <h4 className="feature__title">{title}</h4>
          </div>
          <a href="#" className="btn__link" >
            <i className="icon-arrow-right icon-outlined"></i>
          </a>
        </div>
      </div>
    );
  };

  export default FeatureItem;