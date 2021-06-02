import React from 'react';
import { useHistory } from 'react-router-dom';

import '../../scss/header.scss';
import logo from '../../assets/images/logo.svg';

function Header() {
  const navigate = useHistory();

  return (
    <header>
      <img src={logo} width={87} height={53} alt="Logo" />
      <p
        onClick={() => {
          navigate.goBack();
        }}
        aria-hidden="true"
      >
        Voltar
      </p>
    </header>
  );
}

export default Header;
