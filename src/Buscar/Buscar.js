import React, { useState } from "react";
import searchPokemon from "../Api/Api";


const Buscar = (props)=>{

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
        <>
        <div>
            <input 
                value={search}
                onChange={onChange}>
            </input>
        </div>
        <div>
            <button onClick={() => onClick(search)}>Buscar</button>
        </div>
        </>
        )
}

export default Buscar