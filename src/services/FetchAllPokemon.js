import axios from "axios";


export const FetchAllPokemon = axios.create({
 baseURL: 'https://pokeapi.co/api/v2/pokemon/',
})

export const FetchIndividualPokemon = axios.create({
 baseURL: `https://pokeapi.co/api/v2/pokemon/`,
})


