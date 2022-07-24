import React from "react";
import {searchPokemon, getPokemonsData} from "../Api/Api"

class Pokemon extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            pokemon: [],
            isFetch: true
        }
    }
    async componentPokemon() {
        const responseJson = await getPokemonsData()
        this.setState({ pokemon : responseJson.results, isFetch: false})
    }

    handleSearch = async (search) =>{
        const responseJson = await searchPokemon(search)
        this.setState ({pokemon: responseJson.results})
    }
    render () {
        const {pokemon} = this.state

        return (
            <>
            <div>
                {pokemon && 
                <div>
                    <div>Nombre: {pokemon.name}</div>
                </div>}
            </div>
            </>
            
        )
    }
}

export default Pokemon;