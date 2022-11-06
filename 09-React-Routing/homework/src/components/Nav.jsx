import React from 'react';
import Logo from '../../logoHenry.png'
import SearchBar from '../SearchBar/SearchBar';
import style from './nav.module.css';
import { Link } from 'react-router-dom';

function Nav({ onSearch }) {
  return (
    <div className={style.nav}>
      <Link to="/">
        <div className={style.navTitle}>
          <img src={Logo} alt="logo" className={style.logo} />
          <h2>Henry - Weather App</h2>
        </div>
      </Link>
      <Link to="/about">
        <div className={style.navAbout}>
          <h3>About</h3>
        </div>
      </Link>
      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default Nav;
