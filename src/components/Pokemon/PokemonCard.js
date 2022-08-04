import React from "react";
import classes from "./PokemonCard.module.css";

const PokemonCard = ({id,image,name,type,_callback}) => {
    console.log({id,image,name,type,_callback})
    return (
        <div className={classes.pokemonCard}>
            {/*<div className="number"><small>#0{id}</small></div>*/}
            <img src={image} alt={name} className={classes.spriteImages} />
            <div className={classes.detail_wrapper}>
                <h3>{name}</h3>
                <small>Type: {type}</small>
            </div>
        </div>
    );
}

export default PokemonCard