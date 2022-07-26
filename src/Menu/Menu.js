import React from "react";
import { Link, Outlet } from 'react-router-dom'
import Buscar from "../Buscar/Buscar";
import "../index.css"


const Menu = (props) => {

    return(
        <div className="menu-container">
            <div className="links">
               <div className="link-pokemon">
                <Link to='/pokemon'>
                    Pokemon
                </Link>
                </div>
                <div className="link-lista">
                <Link to='/lista'>
                    Lista
                </Link>
                </div>
                <div className="link-combate">
                <Link to='/combate'>
                    Combate
                </Link>
                </div>
                <div className="link-historial">
                <Link to='/historial'>
                    Historial
                </Link>
                </div>
            </div>
            <div>
                <Buscar></Buscar>
            </div>
            <Outlet/>
        </div>
    )
}

export default Menu;