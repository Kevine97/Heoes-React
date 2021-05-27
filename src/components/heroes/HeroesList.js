import React from 'react'
import GetHeroesByPublisher from '../../selectors/GetHeroesByPublisher'

const HeroesList = ({publisher}) => {

    const heroesList = GetHeroesByPublisher(publisher)

    return (
        <ul>
            {
                heroesList.map(({id, superhero}) =>(
                    <li key={id}>
                        {superhero}
                    </li>
                ))
            }
            
        </ul>
    )
}

export default HeroesList
