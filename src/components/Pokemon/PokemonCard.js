import React from "react";
import classes from "./PokemonCard.module.css";


const PokemonCard = ({id,image,name,type,weight}) => {
    console.log({id,image,name,type,weight})
    return (
        <div className={classes.pokemonCard}>
            <div className={classes.card_header}>
                <div>0{id}</div>
                <div>W: {weight}</div>
            </div>
            <img src={image} alt={name} className={classes.spriteImages} />
            <div className={classes.detail_wrapper}>
                <h3>{capitalizeFirstLetter(name)}</h3>{capitalizeFirstLetter(type)}
            </div>
        </div>
    );
}

export default PokemonCard

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}