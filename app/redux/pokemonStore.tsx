import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./pokemonSlice";

const store = configureStore({
  reducer: {
    pokemon: pokemonReducer, // Registering the auth slice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
