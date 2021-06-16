import React from 'react'
import HeroesList from '../heroes/HeroesList'

const DcScreen = () => {


    

    return (
        <div  className="container-fluid mt-5">
            <h1>Dc Screen</h1>
            <hr/>
            <HeroesList publisher="DC Comics"/>
        </div>
    )
}

export default DcScreen
