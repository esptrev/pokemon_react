import React from "react";

const PokemonCard = (props) => {
    console.log(props)
    const pokeName = props.pokemon.map(pokemon => pokemon.name)
    console.log(pokeName);
    return (
        <div className="pokemonCard">
                <div>{pokeName}</div>
        </div>
    );


}

export default PokemonCard