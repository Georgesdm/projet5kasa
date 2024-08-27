import React, { useEffect } from 'react';
import logements from '../data/logements.json';
import Slideshow from '../components/Slideshow/Slideshow';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Collapse from '../components/Collapse/Collapse';
import Ranking from '../components/Ranking';
import '../styles/FicheLogementPage.scss';


const FicheLogementPage = () => {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);
  const navigate = useNavigate();

  useEffect(() => {
    if (!logement) {
      // Rediriger vers la page d'erreur
      navigate('/404', { replace: true });
    }
  }, [logement, navigate]);

  if (!logement) {
    // Retourner null pour éviter le rendu de la page
    return null;
  }

  return (
    <div className="fade-in">
        <Slideshow images={logement.pictures} />
        <div className="fiche-logement-content">
          <div className="title-host">
            <div className="title-location">
              <h1>{logement.title}</h1>
              <div className="location">{logement.location}</div>
           </div>          
            <div className="host">
              <div className="host-name">
                <div>{logement.host.name.split(' ')[0]}</div>
                <div>{logement.host.name.split(' ')[1]}</div>
              </div>
              <div className="host-picture">
                <img src={logement.host.picture} alt={logement.host.name} />
              </div>
            </div>
          </div>
          <div className="tags-ranking">
            <div className="tags">
              {logement.tags.map((tag, index) => (
                <div key={index} className="tag">
                  {tag}
                </div>
              ))}
            </div>
            <Ranking rating={logement.rating} />
          </div>

          <div className="ranking-host-mobile">
            <Ranking rating={logement.rating} />
            <div className="host-mobile">
              <div className="host-name-mobile">
                <div>{logement.host.name.split(' ')[0]}</div>
                <div>{logement.host.name.split(' ')[1]}</div>
              </div>
              <div className="host-picture-mobile">
                <img src={logement.host.picture} alt={logement.host.name} />
              </div>
          </div>
        </div>

        <div className="description-equipements">
          <div className="collapse-container">
            <Collapse title="Description">
              <p>{logement.description}</p>
            </Collapse>
          </div>
          <div className="collapse-container">
            <Collapse title="Équipements">
              <ul>
                {logement.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            </Collapse>
          </div>
        </div>    
        </div>
    </div>
  );
};

export default FicheLogementPage;