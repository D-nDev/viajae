import React from 'react';
import CitiesList from '../citiesList';
import Header from '../header';
import '../../scss/city.scss';

function citiesContainer({ cities }) {
  return (
    <>
      <Header />
      <div id="city-container">
        {cities.map((city, i) => (
          <div key={i}>
            <CitiesList city={city} i={i} />
          </div>
        ))}
      </div>
    </>
  );
}

export default citiesContainer;
