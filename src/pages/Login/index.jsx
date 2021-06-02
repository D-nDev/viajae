import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';

import logo from '../../assets/images/logo.svg';
import '../../scss/login.scss';

function Login() {
  const navigate = useHistory();
  const [userdata, setUserdata] = useState([]);

  function handleCities() {
    const username = document.getElementById('user-name').value;
    const useremail = document.getElementById('user-email').value;
    if (username.length > 0 && useremail.length > 0) {
      setUserdata({
        username,
        useremail,
      });
      navigate.push({
        pathname: '/cities',
        state: { user: userdata },
      });
    } else {
      swal({
        title: 'Aviso!',
        text: 'Preencha todos os campos!',
        icon: 'warning',
      });
    }
  }

  return (
    <>
      <div className="login-container">
        <div className="flex-side left">
          <img src={logo} className="logo-login" alt="Logo" />
        </div>

        <div className="flex-side right">
          <h1 className="my-data">Meus dados</h1>
          <input type="text" placeholder="Nome" name="Nome" id="user-name" />
          <input
            type="email"
            placeholder="E-mail"
            name="email"
            id="user-email"
          />
          <button
            className="see-cities"
            type="submit"
            onClick={() => {
              handleCities();
            }}
          >
            Ver cidades disponíveis
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
