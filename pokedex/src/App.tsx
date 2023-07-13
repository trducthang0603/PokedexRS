import React from 'react';
import logo from './logo.svg';
import { SyntheticEvent, useEffect, useState } from "react";
import './App.css';
import { Slide } from './components/Slide';
import { pokemonTypes } from './pokemonTypes';
import { PokemonType } from './components/PokemonType';
// import { Pokemon } from "../../types/Pokemon";
type SearchFilterProps = {
  //setPokemonList: (data: Pokemon[]) => void;
  pokemonAmount: number;
  setPokemonAmount: (value: number) => void;
  setLoading: (value: boolean) => void;
  setShowPagination: (value: boolean) => void;
  setDisabledButton: (value: boolean) => void;
};
function App() {
  const [selectedType, setSelectedType] = useState("");

  const handleClick = async (e: SyntheticEvent) => {
    const typeName = (e.currentTarget as HTMLButtonElement).value;
    setSelectedType(typeName);
    // props.setPokemonAmount(9);
    // props.setLoading(true);
    // //props.setPokemonList(await fetchPokemonByType(typeName));
    // props.setLoading(false);
    // props.setShowPagination(false);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Slide>{pokemonTypes.map(({name})=> (<PokemonType key = {name} type = {name} tabIndex = {true} handleClick={handleClick}   />))}</Slide>
      </header>
    </div>
  );
}

export default App;
