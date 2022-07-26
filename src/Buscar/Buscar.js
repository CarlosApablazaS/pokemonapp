import React, { useState } from "react";
import {NavLink} from "react-router-dom";
import {searchPokemon} from "../Api/Api"

const Buscar = (props) => {

    const[search, setSearch] = useState('')
    const[pokemon, setPokemon] = useState()

    const onChange = (e) =>{
        setSearch(e.target.value)
    }
    const onClick = async (e) => {
        const data = await searchPokemon(search)
        console.log(data)
        setPokemon(data)
    }

    const handleChange = (e) => {
        setPokemon(e.target.value)
    }
    return(
        <div>
            <div className='search-container'>
                <div className="search">
                    <input  
                        placeholder="Buscar Pokemon..."
                        type='text' 
                        onChange={onChange} 
                        value={search}>
                    </input>   
                </div>
                <div className="search-btn">
                    <button  
                        type='submit' 
                        onClick={(e) => onClick(e)}>Buscar</button>
                </div>
            </div>
            <div>
                <div className="data-container">
                    {pokemon && 
                    <div className="data">
                         <div className="img-container">
                            <div className="front-m">Frente Masculino
                                <img src={pokemon.sprites.front_default}/>
                            </div>
                            <div className="front-m-s">Frente Masculino Shiny
                                <img src={pokemon.sprites.front_shiny}/>
                            </div>
                            <div className="front-f">Frente Femenino
                                <img src={pokemon.sprites.front_female}/>
                            </div>
                            <div className="front-f-s">Frente Femenino Shiny
                                <img src={pokemon.sprites.front_shiny_female} />
                            </div>
                        </div>
                        <div className="data-info">
                        <div className="name">Nombre: {pokemon.name}</div>
                        <div className="type">Tipo: {pokemon.types.map((type) => {
                            return(<div className="type-container">{type.type.name}</div>)
                        })} </div>
                        <div className="weight">Peso: {pokemon.weight} </div>
                        <div className="abilities">Habilidades: {pokemon.abilities.map((ability) => {
                            return(<div className="abilities-container">{ability.ability.name}</div>)
                        })} </div>
                        <div className="exp">Experiencia: {pokemon.base_experience} </div>
                        <div className="move">Movimientos: {pokemon.moves.map((move) => {
                            return(<div className="move-container">{move.move.name}</div>)
                        })} </div>
                        </div>
                    </div>}
                </div>
            </div>
        </div>

    )
}
export default Buscar