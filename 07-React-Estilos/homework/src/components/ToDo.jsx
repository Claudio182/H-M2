import React from 'react';
import Style from './ToDo.module.css'

export default function ToDo () {

    return (
        <div class={Style.conteiner}>

            <h1 class={Style.title}>ToDo</h1>

            <form id="formulario" class={Style.form}>
                <input type="text" placeholder="Ingrese tarea" class={Style.input} autofocus />
                <button class={Style.btn} type="submit">Agregar</button>
            </form>
            <hr />
            <div id="lista-tareas" class={Style.list}></div>

        </div>
    )
}