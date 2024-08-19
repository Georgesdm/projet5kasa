import React from 'react';
import './Card.scss'; 
import { useNavigate } from 'react-router-dom';

const Card = ({ id, title, imageUrl }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/fiche-logement/${id}`); // Redirige vers la page du logement avec l'ID approprié
  };

  return (
    <div className="card" onClick={handleClick}>
      <img src={imageUrl} alt={title} className="card-image" />
      <h2 className="card-title">{title}</h2>
    </div>
  );
};

export default Card;