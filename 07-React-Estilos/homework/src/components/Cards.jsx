import React from 'react';
import Card from './Card';
import Style from './Cards.module.css'

export default function Cards( { cities, onClose } ) {
    // acá va tu código
    // tip, podés usar un map
    return (
        <div className={Style.content}>
            {console.log(cities)}
            {cities.length > 0 ? 
                cities.map( (city) =>    <Card 
                key={city.id}
                max={city.max}
                min={city.min}
                name={city.name}
                img={city.img}
                onClose={ () => onClose(city.id)}
                />
            ):
            <h3>No hay ciudades</h3>
        }
        </div>
    )
};