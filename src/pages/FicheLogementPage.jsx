import React, { useEffect } from 'react';
import logements from '../data/logements.json';
import Slideshow from '../components/Slideshow/Slideshow';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const FicheLogementPage = () => {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);
  const navigate = useNavigate();

  useEffect(() => {
    if (!logement) {
      // Rediriger vers la page d'erreur
      navigate('/404');
    }
  }, [logement, navigate]);

  if (!logement) {
    // Retourner null pour éviter le rendu de la page
    return null;
  }

  return (
    <div>
        <Slideshow images={logement.pictures} />
        <h1>{logement.title}</h1>
    </div>
  );
};

export default FicheLogementPage;