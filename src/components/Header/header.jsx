import React from 'react'
import './header.css'


export default function Header() {
    return (
        <div className='header'>
            <nav className='hot-topics'>
                <ul className='hot-btn'>
                    <li>ASSUNTOS EM DESTAQUE:</li>
                    <li>Coronavírus</li>
                    <li>Vídeos</li>
                    <li>Edições da revista</li>
                </ul>
                <button id="login-btn">ENTRAR</button>
            </nav>
            <div className='sub-header'>
                <div className='menu-btn'>
                    MENU
                </div>
                <h1 className='brand-logo'>SAÚDE</h1>
                <button id='assine-btn'>ASSINE</button>
                <span id='buscar-btn'>BUSCAR</span>
            </div>
            <nav className='main-menu'>
                <ul className='main-menu-btn'>
                    <li>ALIMENTAÇÃO</li>
                    <li>MEDICINA</li>
                    <li>FITNESS</li>
                    <li>MENTE</li>
                    <li>FAMÍLIA</li>
                    <li>VIDA ANIMAL</li>
                    <li>COLUNISTAS</li>
                    <li>LEITURA SAUDÁVEL</li>    
                </ul>
            </nav>
        </div>
    )
}


