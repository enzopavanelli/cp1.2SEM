import React from 'react'
import './img.css'
import './lazy.png'

export default function Img() {
    return (
        <figure>
            <img src="./lazy.png" alt="woman" />
            <figcaption>
                Se houver suspeita de coronavírus, a orientação é isolar. O hospital deve ser procurado se os sintomas se agravarem. Ilustração: Daniel Almeida/SAÚDE é Vital.
            </figcaption>
        </figure>
    )
}