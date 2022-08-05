import './components/Pokemon/PokemonList.js';
import PokemonList from "./components/Pokemon/PokemonList";
import classes from "./App.module.css";
import Button from "./components/buttons/Button";

function App() {
  return (
    <div className={classes.app}>
     <div className={classes.pokeCardContainer}>
       <PokemonList/>
         <div className={classes.button_box}><Button/><Button/></div>
     </div>

    </div>
  );
}

export default App;
