import React from 'react';

export default function ToDo () {

    return (
        <div class="container">

            <h1 class="text-center">ToDo</h1>

            <form id="formulario" class="d-flex m-4">
                <input type="text" placeholder="Ingrese tarea" class="form-control mx-2 py-3" autofocus />
                <button class="btn btn-block btn-primary mx-3 py-3" type="submit">Agregar</button>
            </form>
            <hr />
            <div id="lista-tareas" class="mt-2"></div>

        </div>
    )
}