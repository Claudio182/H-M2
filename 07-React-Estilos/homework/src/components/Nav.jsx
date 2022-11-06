import React from 'react';
import { NavLink } from 'react-router-dom';

import About from './About';
import SearchBar from './SearchBar';
import style from './nav.module.css';


function Nav({ onSearch }) {
    return (
        <div className={style.nav}>

            <NavLink to="/">
                <div className={style.navTitle}>

                    <h2> <span className={style.logo}>⛈</span>  Weather App</h2>
                </div>
            </NavLink>

            <NavLink to="/about">
                <div className={style.navAbout}>
                    <About />
                </div>
            </NavLink>

            <SearchBar onSearch={onSearch} />
        </div>
    );
};

export default Nav;
