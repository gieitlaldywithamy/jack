// import { createContext } from "react";
// import { useGetPokemon } from "./useGetPokemon";
// import { Pokemon } from "./PokemonType";
// import { useContext } from "react";
// import { useReducer } from "react";

// import { createSlice, configureStore } from "@reduxjs/toolkit";

// interface PokemonState {
//   filter: string;
//   selectedPokemon: Pokemon | null;
// }

// const initialState: PokemonState = {
//   filter: "",
//   selectedPokemon: null,
// };

// const pokemonSlice = createSlice({
//   name: "pokemon",
//   initialState,
//   reducers: {
//     setFilter: (state, action: PayloadAction<string>) => {
//       state.filter = action.payload;
//     },
//     selectPokemon: (state, action: PayloadAction<Pokemon>) => {
//       state.selectedPokemon = action.payload;
//     },
//   },
// });

// export const { setFilter, selectPokemon } = pokemonSlice.actions;
// export
// const store = configureStore({
//   reducer: pokemonSlice.reducer,
// });

// // const pokemonReducer = (state: State, action: Action) => {
// //   switch (action.type) {
// //     case "SET_FILTER":
// //       return { ...state, filter: action.payload };
// //     case "SET_SELECTED_POKEMON":
// //       return { ...state, selectedPokemon: action.payload };
// //     default:
// //       throw new Error("No Action");
// //   }
// // };
// export const PokemonContextProvider: React.FC<{
//   children: React.ReactNode;
// }> = ({ children }) => {
//   const { pokemons } = useGetPokemon();
//   //   const [state, dispatch] = useReducer(pokemonReducer, {
//   //     filter: "",
//   //     selectedPokemon: null,
//   //   });

//   return (
//     <PokemonContext.Provider
//       value={{
//         pokemons: pokemons ?? [],
//         state,
//         dispatch,
//       }}
//     >
//       {children}
//     </PokemonContext.Provider>
//   );
// };

// export const usePokemonContext = () => {
//   const context = useContext(PokemonContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };
