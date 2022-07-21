import React, {useState} from "react";
import {GetPokemon} from "./FetchPokemon";
import PokemonCard from "./PokemonCard";



const PokemonList = () => {
const [pokemon, SetPokemon] = useState([]);


    const populatePokemon = async (data) => {
        let pokemonData = await Promise.all(
            data.map(async (poke) => {
                let pokemonGet = await GetPokemon(poke);
                return pokemonGet;
            })
        );
        SetPokemon(pokemonData);
    };

return (

    <div className="pokemon-container">
        <div className="pokemon">

            <PokemonCard {...pokemon} />

        </div>
    </div>
)



}///End of PokemonList

export default PokemonList;