import React from 'react';
import Style from './SearchBar.module.css'

export default function SearchBar(props) {
    // acá va tu código
    let ciudad = 'Quillota'
    return (
        <div className={Style.content}>
            <input className={Style.input} type="text" id='input'  placeholder='Ciudad...'></input>
            <button className={Style.btn} onClick={ () =>props.onSearch(ciudad)}>Agregar</button>
        </div>
    )
};