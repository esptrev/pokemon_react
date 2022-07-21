import React from "react";
import PokemonURL from "../URLs/PokemonURL";




export const GetPokemon = () => {
    return new Promise((resolve, reject) => {
        fetch(PokemonURL)
            .then((response) => response.json())
            .then((data) => {
                resolve(data);
            });
    });
};

export const GetPokemonDeets = async (url) => {
    return new Promise((resolve, reject) => {
        fetch(PokemonURL)
            .then((response) => response.json())
            .then((data) => {
                resolve(data);
            });
    });
};