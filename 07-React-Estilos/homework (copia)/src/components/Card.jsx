import React from "react";
import { NavLink } from "react-router-dom";
import Style from './Card.module.css'

export default function Card( { onClose, img, name, min, max, id} ) {
    
    return (
        <div className={Style.content}>
            <img className={Style.bcg} src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="" />
            <button className={Style.btn} onClick={onClose}>X</button>
            <NavLink to={`/city/${id}`} className={Style.nav}>
                <h3 className={Style.title} >{name}</h3> 
            </NavLink>
            <div className={Style.subContent} >
                <div className={Style.subDiv}>
                    <div className={Style.subSubDiv}>
                        <p>Min</p>
                        <p>{Math.round(min)}</p>
                    </div>
                    <div className={Style.subSubDiv}>
                        <p>Max</p>
                        <p>{Math.round(max)}</p>
                    </div>
                </div>
                <img className={Style.img} src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="" />
            </div>
        </div>
    )
}
