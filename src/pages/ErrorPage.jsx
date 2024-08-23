import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/error.scss';

const ErrorPage = () => {
  return (
    <div className="scale-up">
      <div className="error-page">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
    </div>
  );
};

export default ErrorPage;