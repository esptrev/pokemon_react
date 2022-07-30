import React, {useEffect, useState} from "react";
import {FetchAllPokemon, FetchIndividualPokemon} from "../../services/FetchAllPokemon";
import PokemonCard from "./PokemonCard";


const PokemonList = () => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        const gatherPokemon = async () => {
            try{
                const response = await FetchAllPokemon('/');
                console.log(response.data.results);
                await populatePokemon(response.data.results);
            }catch (error){
                if(error.response){
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }else{
                    console.log(`Error: ${error.message}`)
                }
            }
        }
        gatherPokemon();
    }, [])

    const populatePokemon = async (data) =>{
        let pokeData = await Promise.all(data.map(async (pokemon) => {
            return FetchIndividualPokemon(pokemon.url);
        }))
        setPokemon(pokeData);
    };

return (
    <PokemonCard>{pokemon}</PokemonCard>
)
}///End of PokemonList

export default PokemonList;