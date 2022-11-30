import React from "react";
import { useParams, NavLink } from "react-router-dom";

import Style from "./city.module.css"


export default function City ( {onFilter, onClose} ) {

    const { key } = useParams()

    let city = onFilter(key)

    
        if (city) { 
            return(
                <div className={Style.city}>
                    <div className={Style.container}>
                        <NavLink className={Style.btn} to={'/'}>X</NavLink>
                        <div className={Style.contTitle}>
                            <h2 className={Style.title}>{city.name}</h2>
                            <img className={Style.bcg} src={`http://openweathermap.org/img/wn/${city.img}@2x.png`} alt="" />
                        </div>
                        
                        <main className={Style.info}>
                            <div>Temperatura: <span className={Style.span}>{city.temp} ºC</span></div>
                            <div>Clima: <span className={Style.span}>{city.weather}</span></div>
                            <div>Viento: <span className={Style.span}>{city.wind}km/h</span> </div>
                            <div>Cantidad de nubes: <span className={Style.span}>{city.clouds}</span></div>
                            <div>Latitud: <span className={Style.span}>{city.latitud}º</span></div>
                            <div>Longitud: <span className={Style.span}>{city.longitud}º</span></div>
                        </main>

                    </div>
                </div>
        )
        }else{
            return <div>No hay ciudad</div>
        }
        
}