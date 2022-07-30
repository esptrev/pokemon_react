import React from "react";

const PokemonCard = (props) => {
    console.log(props)
    let name = props.children.map(children => children.data.name);
    let backDefault = props.children.map(children => children.data.sprites.back_default);
    let backShiny = props.children.map(children => children.data.sprites.back_shiny);
    let frontDefault = props.children.map(children => children.data.sprites.front_default);
    let frontShiny = props.children.map(children => children.data.sprites.front_shiny);

    return (
        <div className="pokemonCard">
                <div>{name}</div>
                <div>{frontDefault}</div>
                <div>{name}</div>
        </div>
    );


}

export default PokemonCard