import React from 'react';
import { useHistory } from 'react-router-dom';
import '../../scss/visit.scss';
import logo from '../../assets/images/logo.svg';

function Confirm() {
  const navigate = useHistory();

  function handleRedirect() {
    navigate.push('/');
  }

  return (
    <main>
      <div>
        <img src={logo} alt="Logo" />
        <h1>Confirmar visita?</h1>
        <div className="buttons-visit">
          <div>
            <button
              className="cancel-button"
              onClick={() => {
                navigate.goBack();
              }}
              type="submit"
            >
              Cancelar
            </button>
            <button
              className="confirm-button"
              onClick={() => {
                handleRedirect();
              }}
              type="submit"
            >
              Confirmar
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Confirm;
