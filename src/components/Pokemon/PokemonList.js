import React, {useEffect, useState} from "react";
import {GetPokemon, GetPokemonDeets} from "./FetchPokemon";
import PokemonCard from "./PokemonCard";


const PokemonList = () => {

const [pokemon, SetPokemon] = useState([]);

    useEffect(() => {
        const fetchPokemon = async () => {
            let response = await GetPokemonDeets(
                `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20`

            );
            await populatePokemon(response.results);
        };
        fetchPokemon();

    }, []);

    const populatePokemon = async (data) => {
        console.log(data)
        let pokemonData = await Promise.all(
            data.map(async (pokemon) => {
                return await GetPokemon(pokemon);
            })
        );
        SetPokemon(pokemonData);
    };

return (

    <div className="pokemon-container">
        <div className="pokemon">
            <PokemonCard pokemon={...pokemon} />
        </div>
    </div>
)



}///End of PokemonList

export default PokemonList;