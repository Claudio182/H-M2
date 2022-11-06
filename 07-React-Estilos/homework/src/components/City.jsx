import React from "react";
import Style from "./city.mdule.css"

export default function City ( {cities} ) {

    return(
        <div className={Style.city}>
            <div className={Style.container}>
                <h2 className={Style.title}>{cities.name}</h2>
                <main className={Style.info}>
                    <div>Temperatura: {cities.temp} ºC</div>
                    <div>Clima: {cities.weather}</div>
                    <div>Viento: {cities.wind} km/h</div>
                    <div>Cantidad de nubes: {cities.clouds}</div>
                    <div>Latitud: {cities.latitud}º</div>
                    <div>Longitud: {cities.longitud}º</div>
                </main>

            </div>
        </div>
    )
}