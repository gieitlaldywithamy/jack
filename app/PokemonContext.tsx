import { createContext } from "react";
import { useGetPokemon } from "./useGetPokemon";
import { Pokemon } from "./PokemonType";
import { useContext } from "react";
import { useReducer } from "react";

type Action =
  | { type: "SET_FILTER"; payload: string }
  | { type: "SET_SELECTED_POKEMON"; payload: Pokemon };
type Dispatch = (action: Action) => void;
type State = { filter: string; selectedPokemon: Pokemon | null };

const PokemonContext = createContext<
  { state: State; dispatch: Dispatch; pokemons: Pokemon[] } | undefined
>(undefined);

const pokemonReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SET_FILTER":
      return { ...state, filter: action.payload };
    case "SET_SELECTED_POKEMON":
      return { ...state, selectedPokemon: action.payload };
    default:
      throw new Error("No Action");
  }
};
export const PokemonContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { pokemons } = useGetPokemon();
  const [state, dispatch] = useReducer(pokemonReducer, {
    filter: "",
    selectedPokemon: null,
  });

  return (
    <PokemonContext.Provider
      value={{
        pokemons: pokemons ?? [],
        state,
        dispatch,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemonContext = () => {
  const context = useContext(PokemonContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
