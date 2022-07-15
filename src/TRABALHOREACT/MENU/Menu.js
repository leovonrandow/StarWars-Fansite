import React from "react";
import { Link } from "react-router-dom";
import './Menu.scss'

export default class Menu extends React.Component {
    render() {
        return (
            <nav className="Link">
                <Link className='linkcolor' to="/">PÁGINA INICIAL</Link>
                <Link className='linkcolor' to="/ESPECIES">ESPÉCIES</Link>
                <Link className='linkcolor' to="/PERSONAGENS">PERSONAGENS</Link>
                <Link className='linkcolor' to="/PLANETAS">PLANETAS</Link>
                <Link className='linkcolor' to="/VEICULOS">VEÍCULOS</Link>
            </nav>
         
            
           
        )
    }
}