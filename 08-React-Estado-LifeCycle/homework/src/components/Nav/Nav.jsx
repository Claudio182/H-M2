import React from 'react';
import Logo from '../../logoHenry.png'
import SearchBar from '../SearchBar/SearchBar';
import style from './nav.module.css';

function Nav({ onSearch }) {
  return (
    <div className={style.nav}>
      <div className={style.navTitle}>
        <img src={Logo} alt="logo" className={style.logo} />
        <h2>Henry - Weather App</h2>
      </div>
      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default Nav;
