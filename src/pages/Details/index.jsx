import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import '../../scss/details.scss';
import Header from '../../components/header';
import localimg from '../../assets/images/local.svg';
import loadingimg from '../../assets/images/loading.svg';

function Details() {
  const params = useParams();
  const navigate = useHistory();
  const [citydata, setCitydata] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/D-nDev/viajaefakeapi/cities/${params.id}`,
    )
      .then(response => response.json())
      .then(data => setCitydata(data))
      .finally(setLoading(false));
  }, [params.id]);

  if (loading) {
    return (
      <div className="loading-container">
        <img src={loadingimg} width={387} height={237} alt="Loading" />
      </div>
    );
  }

  function handleRedirect() {
    navigate.push('/visit');
  }

  return (
    <>
      <Header />
      <div className="city-detail">
        <div className="city-detail-image">
          <img className="main-img" src={citydata.image} alt={citydata.name} />

          <div className="left-side-detail">
            <div>
              <h3>{citydata.name}</h3>
              <h4>{citydata.state}</h4>
              <p>{citydata.description}</p>
            </div>

            <div className="right-side-detail">
              <span
                onClick={() => {
                  handleRedirect();
                }}
                aria-hidden="true"
              >
                <img
                  src={localimg}
                  className="local-img"
                  alt="Local"
                  aria-hidden="true"
                />
                Confirmar visita
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
