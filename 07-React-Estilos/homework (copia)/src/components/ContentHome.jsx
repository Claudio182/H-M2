import React from 'react'
import Cards from './Cards'
import ToDo from './ToDo'

function ContentHome({cities, onClose}) {
    return (
        <div>
            <ToDo />
            <Cards cities={cities} onClose={onClose} />
        </div>
    )
}

export default ContentHome