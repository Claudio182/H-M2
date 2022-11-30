import React from 'react';
import style from './searchBar.module.css';

export default function SearchBar({ onSearch }) {
  // acá va tu código
  return (
    <div className={style.search}>
      <input type="text" placeholder="Ciudad" />
      <button onClick={() => onSearch("Buscando Ciudad")}>Buscar</button>
    </div>
  )
};