import React from 'react'
import './styless.css'
import Img from './img'


export default function Menu() {
    return (
        <>
        <header className='header'>
            <p>Menu</p>
            <nav>
            <ul className='Menu'>    
                <li><a href='https://www.youtube.com/watch?v=wbXMd1Jjiks' target='_blank'>Youtube</a></li>
                <li><a href='https://www.omelete.com.br/castlevania-2/castlevania-sinopse-terceira-temporada' target='_blank'>Sinopse</a></li>
                <li><a href='www.facebook.com.br' target="_blank">Facebook</a></li>
            </ul>
            </nav>
        </header>

        <h1>Castlevania 3º temporada </h1>

        <body>            
        <div className='div'>
            <div className='text'>
            <p>Passados os eventos da 2ª temporada de Castlevania, Trevor Belmont e Sypha vão se mudar para uma vila com seus próprios segredos sinistros, revela a sinopse do novo ano do anime na Netflix (via CB).</p>
            <p>A descrição publicada pelo streaming traz informações sobre o paradeiro de todos os principais personagens da série animada, que retorna para mais uma temporada em março.</p>
            <p>“Belmont e Sypha se instalam em uma vila com segredos sinistros, Alucard ensina um par de admiradores, e Isaac embarca numa missão para encontrar Hector”.</p>
            <p>Com roteiro de Warren Ellis (Planetary), Castlevania acompanha Trevor (Richard Armitage), o último sobrevivente do clã Belmont, que tenta salvar a Europa Oriental da extinção pelas mãos de Vlad Dracula Tepes (Graham McTavish). O elenco de voz também inclui James Callis, Emily Swallow, Matt Frewer, Tony Amendola e Alejandra Reynoso.</p>
            <p>As duas temporadas de Castlevania estão disponíveis na Netflix. A estreia da terceira está marcada para 5 de março.</p>
        </div>
        <Img />
        </div>

        <footer>Created by: ZeroBulletss</footer>
        </body>
        



        </>
    )
}