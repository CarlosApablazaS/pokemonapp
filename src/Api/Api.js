export const searchPokemon = async (pokemon) => {
    try {
        let url =`https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch(err){

    }
}
export const getPokemons = async (limit=151, offset=0) => {
    try {
        let url =`https://pokeapi.co/api/v2/pokemon?limit=${limit}offset=${offset}`
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch(err){

    }
}

export const getPokemonsData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch(err){

    }
}

export default searchPokemon;