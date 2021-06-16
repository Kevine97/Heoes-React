import React from 'react'
import HeroesList from '../heroes/HeroesList'

const MarvelScreen = () => {
    
    return (
        <div  className="container-fluid mt-5">
            <h1>Marvel Screen</h1>
            <hr/>
            <HeroesList publisher="Marvel Comics"/>
        </div>
    )
}

export default MarvelScreen
