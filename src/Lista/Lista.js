import React,{ useState, useEffect } from "react"
import { getPokemons, getPokemonsData } from "../Api/Api"
import Carta from "./Carta"

const Lista = (props) =>{
    
    const [pokemons, setPokemons] = useState([])

    const fetchPokemons = async () => {
        try{
            const data = await getPokemons()
            const promises = data.results.map(async(pokemon) =>{
                return await getPokemonsData(pokemon.url)
            })
            const results = await Promise.all(promises)
            setPokemons(results)
        } catch(err){

        }

    }
    useEffect(() => {
        fetchPokemons()
    },[])

    return(
        <div>
            <div>
                <h1>Lista de Pokemones</h1>
            </div>
            <div className="card-container">
                {pokemons.map((pokemon) => {
                    return <Carta pokemon={pokemon} key={pokemon.name}/>
                })}
            </div>
        </div>
    )
}
export default Lista