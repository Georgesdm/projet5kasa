import React from 'react';
import './Banner.scss';

// Import des images locales
import homeBannerImage from '../../assets/home-banner.png';
import aboutBannerImage from '../../assets/about-banner.png';

const Banner = ({ type }) => {
  let imageUrl;
  let text;

  if (type === 'home') {
    imageUrl = homeBannerImage;
    text = (
      <>Chez vous,<br className="mobile-br" /> partout et ailleurs</>
    );
  } else if (type === 'about') {
    imageUrl = aboutBannerImage;
    text = null;
  }

  return (
    <div className="banner" style={{ backgroundImage: `url(${imageUrl})` }}>
      {text && <h1>{text}</h1>}
    </div>
  );
};

export default Banner;