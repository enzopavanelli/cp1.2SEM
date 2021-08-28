import React from 'react'
import img from '../Img/lazy.png'
import './figure.css'

export default function figure(){

    return(
        <div className="img">
            <figure className="figure">
                <img src={img} alt="moça" />
            </figure>
            <figcaption className="caption">
                Se Houver Suspeita de coronavirus, a orientação é se isolar. O hospital deve ser procurado 
                se os sintomas se agravarem. Ilustração: DanielAlmeida/SAUDE é vital.
            </figcaption>

        </div>
    )



}
