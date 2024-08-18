import React from 'react';
import './Banner.scss';

// Import des images locales
import homeBannerImage from '../../assets/home-banner.png';
import aboutBannerImage from '../../assets/about-banner.png';

const Banner = ({ type }) => {
  let imageUrl;
  let text;
  // On définit l'image et le texte à afficher en fonction du type de bannière
  if (type === 'home') {
    imageUrl = homeBannerImage;
    text = "Chez vous, partout et ailleurs";
  } else if (type === 'about') {
    imageUrl = aboutBannerImage;
    text = null;
  }
  // On retourne le JSX
  // On utilise la propriété style pour définir le fond de la bannière
  return (
    <div className="banner" style={{ backgroundImage: `url(${imageUrl})` }}>
      {text && <h1>{text}</h1>}
    </div>
  );
};

export default Banner;