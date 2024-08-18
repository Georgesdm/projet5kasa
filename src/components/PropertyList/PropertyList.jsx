import React from 'react';
import Card from '../Card/Card';
import logements from '../../data/logements.json';
import './PropertyList.scss';

const PropertyList = () => {
  return (
    <div className="property-list">
      {logements.map((logement) => (
        <Card key={logement.id} title={logement.title} imageUrl={logement.cover} />
      ))}
    </div>
  );
};

export default PropertyList;