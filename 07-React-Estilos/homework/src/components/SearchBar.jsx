import React, { useState } from 'react';
import Style from './SearchBar.module.css'

export default function SearchBar( {onSearch} ) {
    // acá va tu código
    const [texto, setTexto] = useState("")

    function handleChange (event) {
        setTexto( estado => event.target.value)
    }


    return (
        <div className={Style.content}>
            <form onSubmit={(e) => {
                e.preventDefault();
                onSearch(texto);
            }}>
                <input className={Style.input} type="text" id='input'  placeholder='Ciudad...' onChange={ (event) => handleChange(event)} />

                <input className={Style.btn} type='submit' value='Agregar'></input>
            </form>
        </div>
    )
};