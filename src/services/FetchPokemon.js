import axios from "axios";


export const FetchPokemon = axios.create({
 baseURL: 'https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0',
})


