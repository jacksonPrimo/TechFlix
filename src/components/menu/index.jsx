import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../../assets/imagem/LogoMain.png'
import ButtonLink from './components/ButtonLink'
import './menu.css'

export default function Menu(){
    return(
        <nav className="Menu">
            <Link to="/">
                <img src={Logo} alt="alura logo" className="Logo"></img>
            </Link>
            <ButtonLink className="ButtonLink" href="/cadastro/video">
                Novo Video
            </ButtonLink>
        </nav>
    )
}