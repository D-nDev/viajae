import React, { useEffect, useState } from 'react';

import '../../scss/city.scss';
import CitiesContainer from '../../components/citiesContainer';
import loadingimg from '../../assets/images/loading.svg';

function Cities({ location }) {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/srsantosdev/viajaefakeapi/cities`,
    )
      .then(response => response.json())
      .then(data => setCities(data))
      .finally(setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <img src={loadingimg} width={387} height={237} alt="Loading" />
      </div>
    );
  }

  if (!location.state) {
    window.location.href = '/';
  }

  return <CitiesContainer cities={cities} />;
}

export default Cities;
