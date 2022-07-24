import React from "react";
import { Link, Outlet } from 'react-router-dom'
import { useState } from "react";
import { searchPokemon } from "../Api/Api"

const Menu = (props) => {

    const[search, setSearch] = useState('')
    const[pokemon, setPokemon] = useState()

    const onChange=(e)=>{
        setSearch(e.target.value)
    }

    const onClick = async (e) =>{
        const data = searchPokemon(search)
        setPokemon(data)
    }

    return(
        <div>
            <div>
                <Link to='/pokemon'>
                    Pokemon
                </Link>
            </div>
            <div>
                <Link to='/lista'>
                    Lista
                </Link>
            </div>
            <div>
                <Link to='/combate'>
                    Combate
                </Link>
            </div>
            <div>
                <Link to='/historial'>
                    Historial
                </Link>
            </div>
            <div>
             
            </div>
            <div>
                <input onChange={onChange}/>
                <Link to='/pokemon'>
                    <button onClick={onClick}>Buscar</button>
                </Link>
            </div>
            <Outlet/>
        </div>
    )
}

export default Menu;