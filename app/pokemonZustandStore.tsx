import { create } from "zustand";
import { Pokemon } from "./PokemonType";

interface PokemonState {
  selectedPokemon: Pokemon | null;
  filter: string;
  setFilter: (filter: string) => void;
  setSelectedPokemon: (selectedPokemon: Pokemon) => void;
}

export const usePokemonStore = create<PokemonState>((set) => ({
  filter: "",
  selectedPokemon: null,
  setFilter: (filter: string) =>
    set((state: PokemonState) => ({ ...state, filter })),
  setSelectedPokemon: (selectedPokemon: Pokemon) =>
    set((state: PokemonState) => ({ ...state, selectedPokemon })),
}));
