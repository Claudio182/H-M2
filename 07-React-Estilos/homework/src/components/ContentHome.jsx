import React from 'react'
import Cards from './Cards'
import ToDo from './ToDo'
import Style from './ContentHome.module.css'

function ContentHome({cities, onClose}) {
    return (
        <div className={Style.content}>
            <ToDo className={Style.toDo} />
            <Cards className={Style.cards} cities={cities} onClose={onClose} />
        </div>
    )
}

export default ContentHome