import React from 'react'
import './news.css'


export default function News() {
    return (
        <div className='news'>
            <p>Medicina</p>
            <h1 className="title">
                O que fazer em caso de suspeita de coronavírus?
            </h1>
            <h2 className="description">
                Os sintomas mais comuns do novo coronavírus são similares aos da gripe. O que define um caso supeito e quando ir para o hospital ou fazer exame?
            </h2>
            <span className="author">
                Por Nome do Aluno Atualizado em 18 ago 2020, 10h47 - Publicado em 30 mar 2020, 17h14
            </span>
            <div className="border"></div>
        </div>
    )
}