import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pokemon } from "../PokemonType";

interface PokemonState {
  filter: string;
  selectedPokemon: Pokemon | null;
}

const initialState: PokemonState = {
  filter: "",
  selectedPokemon: null,
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
    selectPokemon: (state, action: PayloadAction<Pokemon>) => {
      state.selectedPokemon = action.payload;
    },
  },
});

export const { setFilter, selectPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
