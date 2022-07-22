import React from "react";

const PokemonCard = (props) => {
    console.log(props)
    const pokeName = props.name;
    return (
        <div className="pokemonCard">
                <div>{pokeName}</div>
        </div>
    );


}

export default PokemonCard