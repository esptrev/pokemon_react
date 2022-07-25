import React, {useEffect, useState} from "react";
import {FetchPokemon} from "../../services/FetchPokemon";
import PokemonURL from "../URLs/PokemonURL";
import PokemonCard from "./PokemonCard";


const PokemonList = () => {
    const [pokemon, setPokemon] = useState([]);

    const getThePokes =async () => {
        const pokeAPIRes = await FetchPokemon(PokemonURL);
        const resData = pokeAPIRes.data.results;
        console.log(resData.name);
        setPokemon(resData);
    }

    useEffect(() => {
        getThePokes();
    }, []);


return (
    <PokemonCard>

    </PokemonCard>
)
}///End of PokemonList

export default PokemonList;