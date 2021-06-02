import React from 'react';
import { useHistory } from 'react-router-dom';

import '../../scss/city.scss';

function CitiesList({ city }, { i }) {
  const navigate = useHistory();

  function handleDetails() {
    navigate.push(`/details/${city.id}`);
  }
  return (
    <div key={i} className="city-box">
      <img
        src={city.image}
        onClick={handleDetails}
        alt={`Foto de ${city.name}`}
        aria-hidden="true"
      />
      <h2>{city.name}</h2>
      <p>{city.state}</p>
    </div>
  );
}

export default CitiesList;
