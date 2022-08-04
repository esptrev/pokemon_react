import React, {useEffect, useState} from "react";
import {FetchAllPokemon, FetchIndividualPokemon} from "../../services/FetchAllPokemon";
import PokemonCard from "./PokemonCard";
import classes from "./PokemonList.module.css";


const PokemonList = () => {
    const [pokemon, setPokemon] = useState([]);

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

    useEffect(() => {
        gatherPokemon();
    }, [])

    const populatePokemon = async (data) =>{
        let pokeData = await Promise.all(data.map(async (pokemon) => {
            return FetchIndividualPokemon(pokemon.url);
        }))
        console.log(pokeData)
        setPokemon(pokeData);
    };

return (
    <div className={classes.pokeCardSub}>{pokemon.map((pokemonStats, index) =>
        <PokemonCard
            key={index}
            id={pokemonStats.data.id}
            name={pokemonStats.data.name}
            image={pokemonStats.data.sprites.front_default}
            type={pokemonStats.data.types[0].type.name}
            weight={pokemonStats.data.weight}
        />
    )}
    </div>

)
}///End of PokemonList

export default PokemonList;
