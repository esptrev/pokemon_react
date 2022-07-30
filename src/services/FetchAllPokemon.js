import axios from "axios";


export const FetchAllPokemon = axios.create({
 baseURL: 'https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0',
})

export const FetchIndividualPokemon = axios.create({
 baseURL: `https://pokeapi.co/api/v2/pokemon/`,
})


