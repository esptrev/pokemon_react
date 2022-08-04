import './components/Pokemon/PokemonList.js';
import PokemonList from "./components/Pokemon/PokemonList";
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.app}>
     <div className={classes.pokeCardContainer}>
       <PokemonList/>
     </div>

    </div>
  );
}

export default App;
